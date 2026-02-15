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
  title: "DAT GO - Professional Loadboard Provider",
  description: "DAT GO - Your trusted loadboard provider. Access real-time load data, manage shipments, and connect with carriers nationwide. Professional loadboard solutions for the transportation industry.",
  keywords: "loadboard, DAT, transportation, logistics, freight, trucking, carriers, shippers, load data, freight matching",
  authors: [{ name: "DAT GO" }],
  creator: "DAT GO",
  publisher: "DAT GO",
  openGraph: {
    title: "DAT GO - Professional Loadboard Provider",
    description: "Access real-time load data and connect with carriers nationwide. Professional loadboard solutions for the transportation industry.",
    type: "website",
    siteName: "DAT GO",
  },
  twitter: {
    card: "summary_large_image",
    title: "DAT GO - Professional Loadboard Provider",
    description: "Access real-time load data and connect with carriers nationwide.",
    creator: "@datgo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/icon.ico" />
        <link rel="icon" href="/logo.ico" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="msapplication-TileColor" content="#4f46e5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="DAT GO" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
