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

export const metadata: Metadata = {
  metadataBase: new URL("https://islandbitcoin.com"),
  title: "Island Bitcoin | Building the Circular Bitcoin Economy",
  description: "Bitcoin sovereignty for the Caribbean. Community, energy, infrastructure — powered by Bitcoin.",
  keywords: ["Bitcoin", "Caribbean", "Lightning Network", "Flash Wallet", "Island Bitcoin", "Bitcoin adoption"],
  openGraph: {
    title: "Island Bitcoin | Building the Circular Bitcoin Economy",
    description: "Bitcoin sovereignty for the Caribbean. Community, energy, infrastructure — powered by Bitcoin.",
    type: "website",
    locale: "en_US",
    siteName: "Island Bitcoin",
    url: "https://islandbitcoin.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Island Bitcoin | Building the Circular Bitcoin Economy",
    description: "Bitcoin sovereignty for the Caribbean. Community, energy, infrastructure — powered by Bitcoin.",
    creator: "@isaboricua",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://subscribe-forms.beehiiv.com/embed.js"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
