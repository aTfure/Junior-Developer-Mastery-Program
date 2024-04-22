import { defineDocumentType, makeSource } from "@contentlayer/source-files";

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/**/*.mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    updatedAt: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    image: { type: "image" },
    // isPublished: { type: "string", required: true },
    author: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
  },

  computedFields: {
    url: {
      type: "string",
      resolve: (doc) =>
        `/blogs/${doc._raw.flattenedPath.replace(/\\.[^/.]+$/, "")}`,
    },
  },
}));

export default makeSource({
  /* options */
  contentDirPath: "content",
  documentTypes: [Blog],
});
