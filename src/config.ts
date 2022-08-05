export const SITE = {
  title: "Documentation",
  description: "Your website description.",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

export const KNOWN_LANGUAGES = {
  English: "en",
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
export const GITHUB_EDIT_URL = `https://github.com/kroucher/create-t3-app-docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
export const COMMUNITY_INVITE_URL = `https://discord.gg/geZHcscA`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export const SIDEBAR = {
  en: [
    { text: "Introduction", header: true },
    { text: "Intro", link: "en/intro" },
    { text: "Getting Started", link: "en/getting-started" },
    { text: "Installation", link: "en/installation" },

    { text: "NextJS", header: true },
    { text: "Why?", link: "en/nextjs/nextjs-why" },
    { text: "Usage", link: "en/page-4" },

    { text: "tRPC", header: true },
    { text: "Why?", link: "en/page-4" },
    { text: "Usage", link: "en/page-4" },

    { text: "TailwindCSS", header: true },
    { text: "Why?", link: "en/page-4" },
    { text: "Usage" },

    { text: "Typescript", header: true },
    { text: "Why?", link: "en/page-4" },
    { text: "Usage" },

    { text: "Prisma", header: true },
    { text: "Why?", link: "en/page-4" },
    { text: "Usage" },

    { text: "NextAuth.js", header: true },
    { text: "Why?", link: "en/page-4" },
    { text: "Usage" },
  ],
};
