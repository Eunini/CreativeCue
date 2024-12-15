import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "CreativeCue",
  description: "Discover & Share AI Prompts",
  images: ["/logo.png"],
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
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
