# Cockatoo MCP directory submissions

Status audited 30 October 2026. **25 distinct submission destinations: 18 previously recorded plus 7 accepted submissions/review requests on 30 October.** **No paid placements purchased.** A submission receipt is not an approved public listing.

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
| [mcpHQ awesome-mcp-servers](https://github.com/mcpHQ/awesome-mcp-servers/pull/483) | Merged, confirmed 30 October 2026. |
| [ToolSDK Registry](https://github.com/toolsdk-ai/toolsdk-mcp-registry/pull/1088) | Pull request open; package validation and CI schema/Biome checks passed. |
| [TensorBlock awesome-mcp-servers](https://github.com/TensorBlock/awesome-mcp-servers/pull/4768) | Merged, confirmed 30 October 2026. Hosted service and private implementation disclosed. |
| [best-of-mcp-servers](https://github.com/tolkonepiu/best-of-mcp-servers/issues/597) | Suggestion submitted; maintainers to assess hosted-service fit. |

| [TrackMCP](https://trackmcp.com/submit-mcp) | Submitted 30 October; confirmation: “Your tool has been submitted. We'll review it and email you a confirmation.” Free; public repository and support email supplied. |
| [MCP Repository](https://mcprepository.com/louisblythe/cockatoo-mcp) | Submitted 30 October; queued for validation and processing. Expected URL shown; not yet verified live. |
| [Awesome Remote MCP Servers (jaw9c)](https://github.com/jaw9c/awesome-remote-mcp-servers/pull/1817) | PR submitted 30 October; review pending. Official hosted endpoint, OAuth and private implementation disclosed. |
| [Kilo Marketplace](https://github.com/Kilo-Org/kilo-marketplace/pull/553) | PR submitted 30 October; review pending. Generated catalog, 119 tests and both typechecks passed. No fresh Kilo-specific OAuth acceptance claimed. |
| [HOL / awesome-ai-plugins](https://github.com/hashgraph-online/awesome-ai-plugins/pull/1052) | PR submitted 30 October; review and centralized source scan pending. 33 generator tests and alphabetical ordering passed. Direct GitHub submission avoided creating another account. |
| [mcp.tc](https://mcp.tc/s/fmprDKXU3E25qRnH) | Submitted 30 October; endpoint check completed, waiting for human review. Reserved eventual URL `https://mcp.tc/i/cockatoo` is not live until approved. |
| [Agenstry](https://agenstry.com/submit) | Submitted 30 October; receipt says “indexed” and endpoint answered handshake with 20 tools. Public search/detail visibility not independently checked. |

## Blocked, waiting, or unsuitable

| Directory | Concrete reason |
| --- | --- |
| AllMCPs | Form requires agreement to Terms and a security check; not submitted without action-time approval. |
| Cline Marketplace | Required attestation that Cline setup has been tested, plus a 400×400 PNG. No fresh Cline acceptance available; not submitted. |
| ProMCP | Explicitly requires public implementation source; connection-docs-only repository does not fit. |
| Plug and Ship | Open-source-only submission requirement; hosted implementation is private. |
| DReview / MCP Hunter | Sign-in required; not submitted in this pass. |
| Tulimoa | Free listing requires a persistent badge on the product site; not added in this pass. |
| LobeHub | Account created and publishing CLI authenticated. GitHub ownership connection requests public/private repository access, workflow updates, read/write gists, and read-only profile/email/organisation data. Awaiting explicit owner approval of these broader permissions. Manifest is prepared in `lhm.plugin.json`. |
| Smithery | Free endpoint registration reached connection settings, then HTTP 403: “Updating servers has been removed. Contact support@smithery.ai.” No confirmed listing. |
| MCP Atlas | Submission action goes to a missing Formspree form (`xformid`). No submission accepted. |
| Developers Digest | No working intake found; advertised repository returned 404. |
| PulseMCP | Direct submission reported paused by SubmitMCP guide; official registry publication completed, downstream import unconfirmed. |
| punkpeye/awesome-remote-mcp-servers | Requires an approved Glama connector badge. Wait for Glama identifier, then prepare a valid remote-list PR. |
| punkpeye/awesome-mcp-servers | Local-installable server list; this repository is connection documentation, not the hosted implementation. Use the remote list instead. |
| MobinX/awesome-mcp-list | Local-installable implementation requirements do not fit this hosted service. |
| ToolHive | Requires a public, permissively licensed implementation; Cockatoo's hosted implementation is private. |
| mcp.so | Rechecked 30 October: only $39 paid submission shown; not purchased. |
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

## Additional visibility observed 30 October 2026

[MCP Harbor](https://ai.mcpharbor.dev/servers/io.github.louisblythe/cockatoo) has a public Cockatoo listing imported from the official registry. This is **not counted as a separate manual submission**. Its displayed 13-tool snapshot may lag the current endpoint; Agenstry observed 20 during its submission check. Existing readiness notes above describe historical tests, not current tool count.

Audit scope: the submission log was reconciled with current GitHub PR states and new browser receipts. Every old web-form listing was not individually rechecked for publication. Counts represent submission destinations, not approved/live listings. No payments, broad private-repository grants, or production website changes were made.
