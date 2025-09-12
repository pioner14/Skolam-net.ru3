const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("date", (dateObj, format) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format);
  });

  const isProduction = process.env.ELEVENTY_ENV === 'production';
  const pathPrefix = isProduction ? "/Skolam-net.ru3/" : "/";

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    pathPrefix: pathPrefix,
    markdownTemplateEngine: "njk"
  };
};