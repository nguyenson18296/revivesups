module.exports = () => {
  return {
    seo: {
      enabled: true,
    },
    ckeditor: true,
    slugify: {
      enabled: true,
      config: {
        contentTypes: {
          product: {
            field: "slug",
            references: "name",
          },
        },
      },
    },
  };
};
