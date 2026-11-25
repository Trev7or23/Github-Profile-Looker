# GitHub Profile Looker

A small web app that looks up GitHub profiles by username or by email.

## What you can do

- **Search by username** — type any GitHub username and you get the profile page: login, name, avatar, bio, public repos and gists counts, and a "View on Github" link.
- **Search by email** — when the email is public in someone's profile, GitHub returns their login and you get the full profile page.
- **Recent searches** — the last five searches are kept in your browser, so you can find them again quickly when you reopen the app.

## How to run it locally

Install the dependencies:

```bash
bun install   # or npm install
```

Start the dev server:

```bash
bun run dev
```

Open the app at `http://localhost:5173`.

Other useful scripts:

```bash
bun run build
bun run preview
bun run lint
bun run test
```

The app reads `VITE_GITHUB_API` as the GitHub API base URL. To use a custom one locally, copy `.env.example` to `.env` and set the variable there. By default it points to the public GitHub API: `https://api.github.com`. Expect the usual anonymous rate limits (a 403 on the email search means you hit the limit — wait a bit and try again).

## Requirements

- Node.js 18+ or a recent Bun. `bun install` and `npm install` both work with this repo.
- No extra accounts or setup needed to browse the app.

## For developers who want to contribute

1. Fork the repo and clone it locally.
2. `bun install` (or `npm install`).
3. `bun run dev` to start developing.
4. `bun run lint` and `bun run test` to check your changes.

PRs and issue reports are welcome.
