const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Добавляем фильтр для работы с датами
  eleventyConfig.addFilter("date", (dateObj, format) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format);
  });

  // Копируем статические файлы в выходную директорию
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");

  // Добавляем отслеживание изменений в статических файлах
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./src/images/");

  // Добавляем глобальные данные
  eleventyConfig.addGlobalData("env", "production");
  
  // Добавляем фильтр absoluteUrl
  eleventyConfig.addFilter("absoluteUrl", function(url) {
    const baseUrl = "https://pioner14.github.io"; // Замените на реальный URL при деплое
    if (url.startsWith("http")) {
      return url;
    }
    if (url.startsWith("/")) {
      return baseUrl + url;
    }
    return baseUrl + "/" + url;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    pathPrefix: "/Skolam-net.ru3/",
    markdownTemplateEngine: "njk"
  };
};