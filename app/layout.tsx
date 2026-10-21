import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DEFAULT_TITLE = "Island Bitcoin | Building the Circular Bitcoin Economy";
const DEFAULT_DESCRIPTION =
  "Bitcoin sovereignty for the Caribbean. Community, energy, infrastructure — powered by Bitcoin.";

export const metadata: Metadata = {
  metadataBase: new URL("https://islandbitcoin.com"),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Island Bitcoin",
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    type: "website",
    locale: "en_US",
    siteName: "Island Bitcoin",
    url: "https://islandbitcoin.com",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Island Bitcoin",
  url: "https://islandbitcoin.com",
  logo: "https://islandbitcoin.com/logo-colored.svg",
  description: DEFAULT_DESCRIPTION,
  founder: {
    "@type": "Person",
    name: "Jabari Ennis",
    url: "https://bobodread.com",
  },
  sameAs: [
    "https://github.com/islandbitcoin",
    "https://community.islandbitcoin.com",
    "https://onelovebitcoin.com",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
