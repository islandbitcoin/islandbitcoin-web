# Deployment Guide

## Server Infrastructure

- **Provider:** DigitalOcean Droplet
- **IP:** `206.189.139.60`
- **Domain:** `islandbitcoin.com`
- **OS:** Ubuntu / Docker

## Architecture

The server runs a **Caddy** reverse proxy that routes traffic to various Docker containers:

```mermaid
graph TD
    User --> Caddy[Caddy Proxy (80/443)]
    Caddy -->|islandbitcoin.com| Web[islandbitcoin-web:3000]
    Caddy -->|/.well-known/lnurlp| LN[lightning-server (App Platform)]
```

## Deployment Process

1.  **Commit Changes:**
    Push changes to the `main` branch on GitHub.

2.  **SSH into Server:**
    ```bash
    ssh root@islandbitcoin.com
    ```

3.  **Pull & Rebuild:**
    ```bash
    cd /opt/islandbitcoin-web
    git pull origin main
    
    # Rebuild Docker Image
    docker build -t islandbitcoin-web:latest .
    
    # Restart Container
    docker stop islandbitcoin-web
    docker rm islandbitcoin-web
    docker run -d \
      --name islandbitcoin-web \
      --network stack_edge \
      -p 3000:3000 \
      islandbitcoin-web:latest
    ```

## Docker Configuration

The `Dockerfile` is a multi-stage build optimized for Next.js production:
1.  **Base:** `node:18-alpine`
2.  **Deps:** Installs dependencies.
3.  **Builder:** Builds the Next.js app (`npm run build`).
4.  **Runner:** Lightweight production image executing `server.js`.

## SSL / HTTPS

SSL is handled automatically by **Caddy**. No manual cert management is required on the Next.js container.
