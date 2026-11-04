# Gopika Rajan — Portfolio

Personal portfolio site built with React, Vite and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## Edit content

All text (profile, skills, experience, projects, education) lives in
[`src/data/portfolio.js`](src/data/portfolio.js). Search for `TODO` to find
fields that still need real details. To add a resume download, put
`resume.pdf` in `public/` and set `resumeUrl: 'resume.pdf'`.

## Deploy

Pushing to `main` deploys to GitHub Pages through
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). In the repo
settings, set **Pages → Source** to **GitHub Actions** once.
