import assert from 'node:assert/strict';

const endpoint = 'https://app.cockatoo.com.au/mcp';
const origin = new URL(endpoint).origin;
const token = process.env.COCKATOO_MCP_TOKEN;
let requestId = 0;
async function rpc(method, params, authenticated = false) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/event-stream',
      ...(authenticated && token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ jsonrpc: '2.0', id: ++requestId, method, params }),
    signal: AbortSignal.timeout(30000),
  });
  const body = await response.text();
  let value;
  if (response.headers.get('content-type')?.includes('text/event-stream')) {
    const data = body.split('\n').filter(line => line.startsWith('data:')).map(line => line.slice(5).trim());
    value = data.map(line => JSON.parse(line)).find(message => message.id === requestId);
  } else value = JSON.parse(body);
  return { response, value };
}
const init = await rpc('initialize', {
  protocolVersion: '2025-11-25',
  capabilities: {},
  clientInfo: { name: 'Cockatoo-public-readiness-check', version: '1.0.0' },
});
assert.equal(init.response.status, 200, 'MCP initialize failed');
assert.ok(init.value.result.serverInfo.name, 'Missing server information');
const listed = await rpc('tools/list', {});
assert.equal(listed.response.status, 200, 'Tool discovery failed');
const tools = listed.value.result.tools;
const expected = ['catalog', 'start_onboarding', 'onboarding_status', 'exchange_onboarding', 'get_site', 'create_site', 'save_site', 'list_images', 'upload_image', 'preview_site', 'publication_status', 'publish_site', 'unpublish_site'];
for (const name of expected) {
  const tool = tools.find(tool => tool.name === name);
  assert.ok(tool, `Missing tool: ${name}`);
  assert.ok(tool.description && tool.inputSchema, `Incomplete tool definition: ${name}`);
  assert.ok(tool.annotations, `Missing tool annotations: ${name}`);
}
const catalogue = await rpc('tools/call', { name: 'catalog', arguments: {} });
assert.equal(catalogue.response.status, 200, 'Public catalogue failed');
assert.ok(!catalogue.value.result.isError);
const catalogueData = JSON.parse(catalogue.value.result.content.find(item => item.type === 'text').text);
assert.ok(catalogueData.exampleDocument && catalogueData.templates.length, 'Incomplete catalogue');
const protectedRead = await rpc('tools/call', { name: 'get_site', arguments: {} });
assert.equal(protectedRead.response.status, 401, 'Private website tool must require authorization');
assert.ok(protectedRead.response.headers.get('www-authenticate')?.includes('oauth-protected-resource/mcp'), 'Missing OAuth challenge');
const discovery = await fetch(`${origin}/.well-known/oauth-protected-resource/mcp`, { signal: AbortSignal.timeout(15000) });
assert.equal(discovery.status, 200);
const resource = await discovery.json();
assert.equal(resource.resource, endpoint);
const authorization = await fetch(`${origin}/.well-known/oauth-authorization-server`, { signal: AbortSignal.timeout(15000) });
assert.equal(authorization.status, 200);
const oauth = await authorization.json();
assert.ok(oauth.code_challenge_methods_supported.includes('S256'));
assert.ok(oauth.registration_endpoint, 'Missing dynamic client registration');
if (token) {
  const site = await rpc('tools/call', { name: 'get_site', arguments: {} }, true);
  assert.equal(site.response.status, 200, 'Authenticated site read failed');
  assert.ok(!site.value.result.isError, 'Authenticated site tool failed');
}
console.log(JSON.stringify({ endpoint, server: init.value.result.serverInfo, toolCount: tools.length, catalogue: true, authorizationRequired: true, oauthDiscovery: true, pkce: true, dynamicClientRegistration: true, authenticatedRead: token ? true : 'not requested' }, null, 2));
