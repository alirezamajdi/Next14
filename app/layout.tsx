import type { Metadata, Viewport, MetadataRoute } from "next";
import Head from "next/head";
import ClientLayout from "./ClientLayout";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "../public/static/css/icons.css";
import "./globals.css";

export const metadata: Metadata = {
  description: "A platform for convenient house rental and contract",
  applicationName: "Apollon",
  other: {
    ["og:description"]: "A platform for convenient house rental and contract",
    ["Content-Type"]: "text/html; charset=utf-8",
    ["Content-Language"]: "en",
    ["og:title"]: "Apollon",
    ["og:site_name"]: "Apollon",
    ["og:url"]: "https://apollon.uk.com/",
    ["og:image"]: "https://apollon.uk.com/img/logo.svg",
    ["og:locale"]: "en_GB",
    ["og:image:width"]: "400",
    ["og:image:height"]: "400",
    ["theme-color"]: "#006FFD",
    ["msapplication-navbutton-color"]: "#006FFD",
    ["msapplication-TileColor"]: "#006FFD",
    ["apple-mobile-web-app-status-bar-style"]: "#006FFD",
    ["apple-itunes-app"]: "app-id=1672251268",
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          {/* <link rel='manifest' href='/public/manifest.json' /> */}
          <link rel="shortcut icon" href="/public/favicon.ico" />
          <link rel="manifest" href="/public/manifest.json" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/public/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/public/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/public/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="/public/safari-pinned-tab.svg"
            color="#006ffd"
          />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
            media="all"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" media="all" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
            media="all"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
            media="all"
          />
        </Head>
        <ClientLayout>
          <div>{children}</div>
        </ClientLayout>
      </body>
      <GoogleTagManager gtmId="GTM-5SMKPXQG" />
    </html>
  );
}
