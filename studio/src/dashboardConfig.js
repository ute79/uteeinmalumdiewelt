export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61f2c5178193740944c724e2",
                  title: "Sanity Studio",
                  name: "uteeinmalumdiewelt-studio",
                  apiId: "0f2f4e2f-a0ed-4018-9585-e638b795d51b",
                },
                {
                  buildHookId: "61f2c5174f77af301a44b276",
                  title: "Blog Website",
                  name: "uteeinmalumdiewelt",
                  apiId: "1f12d609-7d2f-46cb-8154-b9a970d68bd9",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ute79/uteeinmalumdiewelt",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://uteeinmalumdiewelt.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
