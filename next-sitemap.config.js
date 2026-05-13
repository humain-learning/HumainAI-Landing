/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://humainlearning.ai",
  generateRobotsTxt: true,

  // Exclude from sitemap.xml
  exclude: ["/api/*", "/testing/*", "/thank-you"],

  // Ensure important course landing pages are always present.
  additionalPaths: async (config) => {
    const paths = [
      "/courses/students/humain-champs",
      "/courses/educators/humain-educators",
    ];

    return Promise.all(paths.map((path) => config.transform(config, path)));
  },

  // Control robots.txt rules
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/testing/", "/thank-you"],
      },
    ],
    includeNonIndexSitemaps: false,
  },
};
