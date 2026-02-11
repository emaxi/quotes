export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
}
