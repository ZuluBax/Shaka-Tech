# ShakaTech

A modern company website built for Cloudflare Pages/Workers hosting.

**Live site:** `https://shakatech.co.uk` currently serves the `coming-soon/` page
(Pages project `shakatech`) — leave that project alone.

**Private test copy:** the real site (this folder's `index.html` + `demos/`, excluding
`versions/` and `coming-soon/`) is deployed separately to Pages project
`shakatech-test`, reachable at `https://test.shakatech.co.uk`. It's gated by
Cloudflare Access (same "Staff email only" policy as the Control Centre project) so it
never gets found by real visitors. Redeploy with
`wrangler pages deploy . --project-name=shakatech-test` from this folder (it respects
`.gitignore`, so `versions/`, `coming-soon/`, `.git`, and `.wrangler` are skipped
automatically).

## Features

- Responsive design
- Smooth scroll navigation
- Contact form — real, wired to [Web3Forms](https://web3forms.com) (`script.js`'s
  `#contact-form` submit handler), delivers Name/Email/Phone/Message straight to
  `hello@shakatech.co.uk`. No backend of our own; the access key lives in a hidden
  input in `index.html` (safe to be public — that's how Web3Forms keys work) and
  captcha is turned off on the Web3Forms side in favour of the `botcheck` honeypot
  field already in the form.
- Service showcase
- Clean, modern UI

## Local Development

Simply open `index.html` in your browser to view the site locally.

## Cloudflare Pages Deployment

### Option 1: Direct Upload (Drag & Drop)
1. Log in to your Cloudflare dashboard
2. Navigate to Pages
3. Create a new project
4. Upload the project files directly

### Option 2: Git Integration (Recommended)
1. Initialize git repository: `git init`
2. Create a repository on GitHub/GitLab
3. Push your code: 
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```
4. Connect your repository to Cloudflare Pages
5. Cloudflare will automatically build and deploy

### Option 3: Wrangler CLI
1. Install Wrangler: `npm install -g wrangler`
2. Login: `wrangler login`
3. Deploy: `wrangler pages deploy .`

## Project Structure

```
ShakaTech/
├── index.html       # Main HTML file
├── styles.css       # Stylesheet
├── script.js        # JavaScript functionality
├── wrangler.toml    # Cloudflare configuration
└── README.md        # This file
```

## Customization

- Edit colors in `styles.css` (`:root` variables)
- Update content in `index.html`
- Add more sections as needed
- Integrate with backend services for form handling

## Next Steps

- Add your company logo
- Update service descriptions
- Set up form backend (Cloudflare Workers, FormSpree, etc.)
- Add analytics
- Configure custom domain in Cloudflare
