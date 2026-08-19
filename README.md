# ShakaTech

A modern company website built for Cloudflare Pages/Workers hosting.

## Features

- Responsive design
- Smooth scroll navigation
- Contact form
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
