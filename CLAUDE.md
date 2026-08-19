# ShakaTech — Project Profile

(Global operating mandate — Agile roles, working style — lives in `~/.claude/CLAUDE.md`
and already applies here. This file only adds what's specific to this project.)

## Tech Stack & Infrastructure

Default to these unless the goal is genuinely unreachable with them — don't propose a
different framework/language without saying why the current stack blocks the goal.

- **Frontend:** plain HTML/CSS/JS (`index.html`, `styles.css`, `script.js`) — no
  framework, no build step
- **Backend:** none — static site
- **Hosting/Infrastructure:** Cloudflare Pages/Workers, deployed via `wrangler.toml` /
  the Wrangler CLI (not via git push — there's no configured git remote)
- **Testing:** none — manual, open `index.html` locally to check changes
- **Package manager:** none required beyond the global `wrangler` CLI

## Domain

- **The product:** a company website — "a modern company website built for Cloudflare
  Pages/Workers hosting" (README), with a contact form and service showcase.
- **End user / business model:** appears to be the marketing site for the ShakaTech
  business itself rather than a product with its own users — confirm if that's still
  accurate.
