# Island Bitcoin Web

The official website for **Island Bitcoin**, built to showcase the circular Bitcoin economy in the Caribbean.

**Live Site:** [https://islandbitcoin.com](https://islandbitcoin.com)

## ⚡ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Language:** TypeScript

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## 📚 Documentation

Detailed documentation is available in the [`/docs`](./docs) folder:

- [**Architecture**](./docs/ARCHITECTURE.md) - Project structure and code patterns.
- [**Deployment**](./docs/DEPLOYMENT.md) - Server setup and Docker configuration.
- [**Design System**](./docs/DESIGN.md) - Theme, colors, and typography.

## 📦 Build & Deploy

This project is deployed as a Docker container on DigitalOcean behind a Caddy reverse proxy.

```bash
# Build locally
npm run build

# Deploy (see docs/DEPLOYMENT.md for details)
ssh root@islandbitcoin.com
```
