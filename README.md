# Cockatoo MCP

Create, edit and publish hosted business websites with owner-approved access.

[Website](https://cockatoo.com.au/agents/) · [Documentation](https://cockatoo.com.au/docs/) · [Privacy](https://cockatoo.com.au/privacy/) · [Support](mailto:support@cockatoo.com.au)

## Connect

**Remote MCP endpoint:** `https://app.cockatoo.com.au/mcp`

Transport: **Streamable HTTP**. Add the endpoint in an MCP client that supports OAuth with PKCE and dynamic client registration. Connect your Cockatoo account and approve the website permissions you want to grant. No local server installation or API key is needed.

```json
{
  "mcpServers": {
    "cockatoo": {
      "url": "https://app.cockatoo.com.au/mcp"
    }
  }
}
```

This is a generic connection example; use your client's documented remote MCP configuration. OAuth discovery: `https://app.cockatoo.com.au/.well-known/oauth-protected-resource/mcp`.

## Gemini CLI extension

Install this connection configuration using Gemini CLI:

```sh
gemini extensions install https://github.com/louisblythe/cockatoo-mcp
```

The root `gemini-extension.json` connects directly to the hosted Streamable HTTP endpoint. It contains no local executable, hooks, skills, credentials or trust override. Existing-site access requires owner-approved OAuth; public catalogue/onboarding tools work before sign-in. Use Gemini CLI's `/mcp auth cockatoo` when authentication is needed, and approve only the permissions you intend to grant.

The manifest follows the official extension and MCP configuration references. Public protocol discovery is verified by `npm run verify`; a fresh interactive Gemini CLI installation/OAuth acceptance run has not been performed. Gallery discovery and approval are separate from publishing this configuration.

## Build a website

1. Call `catalog` for templates, industries, styles and `exampleDocument`.
2. Fill in the document from the business details the owner supplies.
3. Call `start_onboarding` with the owner's email, agent name, document and a random `idempotencyKey`.
4. Give the owner the returned `approvalUrl`. The owner signs in, verifies their email and reviews the draft. For a new owner, approval can publish the website immediately.
5. Connect the owner's account through OAuth for subsequent MCP website operations. Confirm `publication_status` reports `live` and a `liveUrl` before claiming publication.

Public tools work before OAuth. Existing website management requires owner consent. Keep continuation credentials and tokens private. The optional onboarding exchange returns an API token for REST/CLI use, not an MCP token.

## Tools

| Tool | Purpose |
| --- | --- |
| `catalog` | List templates, industries, styles and a starter document |
| `start_onboarding` | Prepare a private draft and owner approval link |
| `onboarding_status` | Check an onboarding request with its private credential |
| `exchange_onboarding` | Exchange an approved request for an API token |
| `get_site` | Read the owner's website draft and revision |
| `create_site` | Create a website draft |
| `save_site` | Save a draft using revision checks |
| `list_images` | List retained uploaded website images |
| `upload_image` | Upload a JPEG, PNG or WebP image |
| `preview_site` | Preview a private draft |
| `publication_status` | Check the published revision and live URL |
| `publish_site` | Publish a saved revision |
| `unpublish_site` | Remove a publication while retaining the draft |

## Permissions and pricing

Scopes: `sites:read`, `sites:write`, `sites:publish`. The connection has no access to customer enquiries, payments, billing settings or domains. Owners can revoke access at any time from [Agent access](https://app.cockatoo.com.au/agent-access).

A free plan is available. Paid upgrades and domain services are managed directly by the owner. See [current pricing](https://cockatoo.com.au/website-pricing/).

## Registry metadata

Official MCP Registry name: `io.github.louisblythe/cockatoo`. The remote-only listing is described in [`server.json`](server.json).

This repository contains public connection documentation and listing metadata. The hosted Cockatoo service is maintained separately; its implementation is not distributed by this repository. The MIT license applies to the files in this repository, not to the hosted service.

## Verify the public endpoint

With Node.js 22 or later, run `npm run verify`. No dependencies or account are required. The check performs initialize, tool discovery, catalogue read, OAuth discovery and an unauthenticated website read that must receive HTTP 401. It never creates or publishes a website.

To additionally verify a permitted site read, set `COCKATOO_MCP_TOKEN` privately in your environment. The script does not print credentials or website content. Revoke any temporary test connection afterward.

## Directory launch status

See [submission receipts, review status, and readiness evidence](SUBMISSIONS.md).
