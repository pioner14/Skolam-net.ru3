const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Добавляем фильтр для работы с датами
  eleventyConfig.addFilter("date", (dateObj, format) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format);
  });

  // Копируем статические файлы в выходную директорию
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  // Добавляем отслеживание изменений в статических файлах
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./src/images/");

  // Добавляем глобальные данные
  eleventyConfig.addGlobalData("env", "development");

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