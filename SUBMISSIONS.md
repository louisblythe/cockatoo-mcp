# Cockatoo MCP directory submissions

Status checked 28 October 2026. **No paid placements purchased.** A submission receipt is not an approved public listing.

## Submitted

| Directory | Status / next step |
| --- | --- |
| [Official MCP Registry](https://registry.modelcontextprotocol.io/?q=cockatoo) | Live and active: `io.github.louisblythe/cockatoo`, version 1.0.0. Independently confirmed through registry API. |
| [MCP Servers](https://mcpservers.org/) | Free submission confirmed; editorial review, advertised within two weeks. |
| [MCP Market](https://mcpmarket.com/) | Free GitHub repository queue confirmed; advertised 4–6 weeks. Used this public connection documentation repository, with hosted implementation clearly disclosed. |
| [AgenticSkills](https://agenticskills.io/) | Free submission confirmed; weekly editorial review. |
| [MCP Server Hub](https://mcpserverhub.com/) | Submission receipt confirmed; review pending. |
| [MCP Server Spot](https://mcpserverspot.com/) | Receipt says server added to directory; a public detail URL has not been independently verified. |
| [MCP Pub](https://mcp.pub/) | Repository queued for editorial review. |
| [Launch MCP](https://launchmcp.co/submit/status/85e48bfa-40f2-425b-9539-7c32c268165a) | Free community submission pending. Its community route requires three upvotes and a badge before publication. |
| [Cursor Directory](https://cursor.directory/plugins/cockatoo) | Plugin accepted; hidden pending automated security scan. |
| [MCP.Directory](https://mcp.directory/) | Submission confirmed; advertised review/publication within 24 hours. |
| [MCP Server Space](https://mcpserver.space/) | Submission received; review pending. |
| [AIBase](https://mcp.aibase.com/submit) | Submission confirmed: “Submitted, we’ll process it ASAP.” Await editorial review. |
| [Glama](https://glama.ai/mcp/connectors) | Hosted connector submitted for review. Await review email and any required health checks. |
| [Docker MCP Catalog](https://github.com/docker/mcp-registry/pull/6223) | Pull request open; catalog validator passed. Docker Desktop end-to-end integration not exercised because local Docker daemon was not running. |
| [mcpHQ awesome-mcp-servers](https://github.com/mcpHQ/awesome-mcp-servers/pull/483) | Pull request open. Generation checks passed; global validation reports existing tag-count errors on unrelated RoboParts/BusyBee entries. |
| [ToolSDK Registry](https://github.com/toolsdk-ai/toolsdk-mcp-registry/pull/1088) | Pull request open; package validation and CI schema/Biome checks passed. |
| [TensorBlock awesome-mcp-servers](https://github.com/TensorBlock/awesome-mcp-servers/pull/4768) | Pull request open. Hosted service and private implementation disclosed. |
| [best-of-mcp-servers](https://github.com/tolkonepiu/best-of-mcp-servers/issues/597) | Suggestion submitted; maintainers to assess hosted-service fit. |

## Blocked, waiting, or unsuitable

| Directory | Concrete reason |
| --- | --- |
| LobeHub | Google sign-in stalled. Email sign-up reaches a new-password form; account owner must complete credential creation. Manifest is prepared in `lhm.plugin.json`. |
| Smithery | Free endpoint registration reached connection settings, then HTTP 403: “Updating servers has been removed. Contact support@smithery.ai.” No confirmed listing. |
| MCP Atlas | Submission action goes to a missing Formspree form (`xformid`). No submission accepted. |
| Developers Digest | No working intake found; advertised repository returned 404. |
| PulseMCP | Direct submission reported paused by SubmitMCP guide; official registry publication completed, downstream import unconfirmed. |
| punkpeye/awesome-remote-mcp-servers | Requires an approved Glama connector badge. Wait for Glama identifier, then prepare a valid remote-list PR. |
| punkpeye/awesome-mcp-servers | Local-installable server list; this repository is connection documentation, not the hosted implementation. Use the remote list instead. |
| MobinX/awesome-mcp-list | Local-installable implementation requirements do not fit this hosted service. |
| ToolHive | Requires a public, permissively licensed implementation; Cockatoo's hosted implementation is private. |
| mcp.so | Paid placement ($39 observed); not purchased. |
| Claude Market | Paid placement (from $10 observed); not purchased. |

[SubmitMCP](https://submitmcp.com/) was used to discover additional submission routes. It is a directory of submission destinations, not itself a Cockatoo listing receipt. Prices and review windows above were observed during submission and may change.

## Readiness evidence

- Live Streamable HTTP endpoint: `https://app.cockatoo.com.au/mcp`.
- Public initialization, discovery, and all 13 tool schemas verified.
- OAuth resource/authorization metadata, PKCE S256, and dynamic client registration verified.
- Private tool requests without authorization correctly return HTTP 401 and authentication challenge.
- Actual owner-approved read-only OAuth connection successfully read the owner's site, then was revoked; subsequent use of that token returned HTTP 401.
- Website onboarding proposal and owner-decline flow exercised; no write permission granted and no existing website changed.
- Latest account application source passed 245 tests across 47 files, including 42 targeted agent tests.
- Public repository verification script passed (`npm run verify`).
- Registry metadata and public connection documentation added; no production runtime fix or deployment was needed during this submission work.

**Verification limit:** a new live create/save/upload/publish/unpublish website lifecycle was not run against a production website in this review. Automated tests cover write paths; this is not a claim of fresh live publishing acceptance.

The MIT license in this repository applies to its documentation and metadata. It does not license Cockatoo's private hosted implementation.
