const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("date", (dateObj, format) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format);
  });

  // Убираем pathPrefix из конфигурации, будем использовать относительные пути
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk"
  };
};