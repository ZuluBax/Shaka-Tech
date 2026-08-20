# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Small business owners and tradespeople in the UK (West Yorkshire base), who own or need a website but whose current site is passive — it doesn't answer enquiries, capture leads, or book appointments for them. The initial demo set covers seven trades (roofer, builder, electrician, plumber, joiner, landscaper, plasterer) plus a dog-walker demo, but the real client base is broader small businesses generally, not trades exclusively. These are non-technical owners who think in outcomes (more enquiries, less admin, faster response), not AI/technical terminology.

## Product Purpose

Shaka Tech builds AI-powered websites for small businesses that answer customer questions 24/7, capture and qualify enquiries, and book appointments/callbacks automatically — turning a static "digital brochure" website into something that actively works for the business. Success means a visitor becomes a qualified lead or booking with less manual admin for the owner.

## Positioning

"We don't just build websites. We build websites that work for your business." The differentiating mechanism is an AI receptionist embedded directly in the website (chat-based enquiry capture, qualification, and callback/appointment booking) — and the Shaka Tech site proves this by letting visitors interact with real, working trade-specific demo sites rather than just reading marketing claims. The site is a functioning demonstration of the product, not a portfolio describing it.

## Operating Context

Static site, no framework, no build step (plain HTML/CSS/JS), hosted on Cloudflare Pages/Workers and deployed via the Wrangler CLI. Trade demos are configuration-driven: each trade has its own config file under `assets/trades/*.js` (business name, services, areas, AI personality/knowledge) that feeds shared, reusable components — chatbot (`assets/js/chatbot.js`), personalization (`assets/js/personalize.js`), trade cards (`assets/js/trade-cards.js`), trade-specific color signatures (`assets/js/trade-colors.js`, `assets/css/trade-signatures.css`) — rather than duplicating markup per trade. This makes adding future trade categories (painter, bricklayer, tiler, kitchen fitter, etc., per the original brief's expansion list) mostly a config-authoring task.

## Capabilities and Constraints

- **Contact form is not yet wired up.** `#contact-form` (in `script.js`) currently only logs to console and shows a browser alert — it does not send anywhere. Confirmed next step: connect it to the business's Google Workspace email account. Until that's built, no real enquiry submitted through the live contact form actually reaches anyone.
- **Trade demo chatbots are simulated, not real.** The AI conversation, calendar booking confirmation, and SMS confirmation shown in each trade demo are a simulated experience only — no real messages are sent and no real appointments are created. This must stay clearly labeled as a demo in the UI; it should never be presented as though it performs a real booking.
- No backend or database — the entire site is static.
- The trade demo businesses (e.g. "Apex Roofing") are explicitly fictional and must stay identifiable as demo content, not real Shaka Tech customers.
- The current `schema.org` structured data on `index.html` includes a phone number (`07700900123`) that has the shape of placeholder content — it has not been confirmed as Shaka Tech's real business number and should not be treated as verified contact evidence until confirmed.

## Brand Commitments

- Name: **Shaka Tech**. Tagline: "TECHNOLOGY. SUPPORT. GROWTH."
- Palette (locked): Cyan `#00E6FF`, Blue `#007BFF`, Dark BG `#0B1220`, Darker BG `#121820`, Light Gray `#E0E0E0`.
- Fonts (locked): Orbitron (display/headings), Raleway (body).
- Existing logo asset: `assets/images/logo.png`.
- Do not redesign the brand from scratch. Per the standing brief (`New website.txt`), all future work should read as a premium evolution of the existing identity, not a different company — reuse existing colour, type, and logo rather than replacing them.

## Evidence on Hand

Shaka Tech is pre-launch: there are no real clients, testimonials, case studies, or press yet. The live trade demos and the site itself ARE the sales pitch at this stage. Future work must not fabricate testimonials, customer logos, review counts, or case studies — any such content must stay explicitly labeled as illustrative/demo content until real evidence exists.

## Product Principles

1. The website must demonstrate the product, not just describe it — every trade demo is a working proof of the AI receptionist, not a mockup or screenshot.
2. Simulated functionality (AI chat outcomes, calendar bookings, SMS confirmations, demo businesses) must never be presented in a way a visitor could mistake for real — label it clearly.
3. Preserve the existing brand identity (colours, fonts, logo, tagline). This is a real trading business, not a rebrand exercise — evolve the look, don't replace it.
4. Write and design for a non-technical local business owner: speak in outcomes (more enquiries, fewer missed calls, faster response, less admin), not AI/technical jargon.
5. Every path through the site should move a visitor toward a real enquiry: Explore Demo → Experience AI → Imagine Your Business → Contact Shaka Tech. Since Shaka Tech itself is pre-launch, generating genuine enquiries for the business is the site's actual job, not a secondary goal.
