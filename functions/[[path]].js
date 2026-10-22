// Cloudflare Pages Function: keep /.well-known/lnurlp/*, /.well-known/nostr.json
// and /api/* forwarding to the lightning server after the site moves to Pages.
// Everything else falls through to static assets.

const UPSTREAM_HOST = "lightning-server-sx3u4.ondigitalocean.app";

function shouldProxy(pathname) {
  return (
    pathname === "/.well-known/nostr.json" ||
    pathname.startsWith("/.well-known/lnurlp/") ||
    pathname.startsWith("/api/")
  );
}

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (!shouldProxy(url.pathname)) {
    return context.env.ASSETS.fetch(context.request);
  }

  const upstream = `${"https"}://${UPSTREAM_HOST}${url.pathname}${url.search}`;
  const proxyRequest = new Request(upstream, context.request);
  proxyRequest.headers.set("Host", UPSTREAM_HOST);
  return fetch(proxyRequest);
}
