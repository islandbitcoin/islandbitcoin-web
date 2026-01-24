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
  title: "Island Bitcoin | Building the Circular Bitcoin Economy",
  description: "Building the circular Bitcoin economy in the tropics. From adoption to infrastructure — we are sovereign. Community, Mining, Flash Wallet, and Foundation.",
  keywords: ["Bitcoin", "Caribbean", "Lightning Network", "Flash Wallet", "Island Bitcoin", "Bitcoin adoption"],
  openGraph: {
    title: "Island Bitcoin | Building the Circular Bitcoin Economy",
    description: "Building the circular Bitcoin economy in the tropics. From adoption to infrastructure — we are sovereign.",
    type: "website",
    locale: "en_US",
    siteName: "Island Bitcoin",
  },
  twitter: {
    card: "summary_large_image",
    title: "Island Bitcoin | Building the Circular Bitcoin Economy",
    description: "Building the circular Bitcoin economy in the tropics. From adoption to infrastructure — we are sovereign.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
