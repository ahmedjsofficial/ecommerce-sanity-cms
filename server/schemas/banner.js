export default {
  name: "banner",
  title: "Hero Banner",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "product",
      title: "Product Name",
      type: "string",
    },
    {
      name: "smalltext",
      title: "Small Text",
      type: "string",
    },
    {
      name: "largetext",
      title: "Large Text",
      type: "string",
    },
    {
      name: "desc",
      title: "Desciption",
      type: "string",
    },
    {
      name: "buttonText",
      title: "ButtonText",
      type: "string",
    },
  ],
};
