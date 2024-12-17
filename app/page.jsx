import Head from "next/head";
import Feed from "@components/Feed";

const Home = () => (
  <>
    <Head>
      {/* General Meta Tags */}
      <title>CreativeCue | AI-Powered Prompt Tool</title>
      <meta
        name="description"
        content="CreativeCue helps you discover, create, and share AI-powered prompts to boost creativity and innovation."
      />

      {/* Open Graph (OG) Tags for Social Media */}
      <meta
        property="og:title"
        content="CreativeCue | AI-Powered Prompt Sharing Tool"
      />
      <meta
        property="og:description"
        content="Explore, create, and share AI-powered prompts with CreativeCue. A platform to inspire modern creativity."
      />
      <meta property="og:image" content="/logo.png" />
      <meta property="og:url" content="https://yourwebsite.com" />
      <meta property="og:type" content="website" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="CreativeCue | AI-Powered Prompt Tool"
      />
      <meta
        name="twitter:description"
        content="Discover, create, and share creative AI-powered prompts with CreativeCue."
      />
      <meta name="twitter:image" content="/assets/images/logo.png" />

      {/* Favicon */}
      <link rel="icon" href="/assets/images/logo.png" />
    </Head>

    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          AI-Powered Prompts
        </span>
      </h1>
      <p className="desc text-center">
        CreativeCue is an open-source AI prompting tool for the modern world to
        discover, create, and share creative prompts.
      </p>

      <Feed />
    </section>
  </>
);

export default Home;