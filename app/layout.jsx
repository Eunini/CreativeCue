"use client"

import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "components/Provider";

export const metadata = {
  title: "CreativeCue",
  description: "Discover & Share AI Prompts",
  openGraph: {
    title: "CreativeCue",
    description: "Discover & Share AI Prompts",
    url: "https://creativecue.com",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "CreativeCue Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CreativeCue",
    description: "Discover & Share AI Prompts",
    images: ["/logo.png"],
  },
};

const RootLayout = ({ children }) => (
  <Provider>
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Discover & Share AI Prompts" />
        <meta property="og:title" content="CreativeCue" />
        <meta property="og:description" content="Discover & Share AI Prompts" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CreativeCue" />
        <meta name="twitter:description" content="Discover & Share AI Prompts" />
        <meta name="twitter:image" content="/logo.png" />
      </head>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  </Provider>
);

export default RootLayout;
