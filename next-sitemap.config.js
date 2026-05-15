/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // Canonical site URL — www form to match the apex 301 redirect.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.humainlearning.ai",
  generateRobotsTxt: true,

  // Exclude from sitemap.xml
  exclude: ["/api/*", "/testing/*", "/thank-you", "/404", "/500"],

  // Ensure important course landing pages are always present.
  additionalPaths: async (config) => {
    const paths = [
      "/courses/students/humain-champs",
      "/courses/educators/humain-educators",
    ];

    return Promise.all(paths.map((path) => config.transform(config, path)));
  },

  // Control robots.txt rules — mirrors
  // workspaces/humainlearning/w1/structural-deploy-bundle/robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/draft/",
          "/preview/",
          "/studio/",
          "/testing/",
          "/thank-you",
          "/_next/",
          "/.well-known/",
          "/404",
          "/500",
        ],
      },
    ],
    includeNonIndexSitemaps: false,
  },
};
