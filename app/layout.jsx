import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "CreativeCue",
  description: "Discover & Share AI Prompts",
};

const RootLayout = async ({ children }) => {
  const session = await getServerSession(authOptions); // ✅ Fetch session

  return (
    <Provider session={session}> {/* ✅ Pass session explicitly */}
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
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
};

export default RootLayout;
