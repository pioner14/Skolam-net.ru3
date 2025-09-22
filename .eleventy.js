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
  eleventyConfig.addGlobalData("env", "development");
  
  // Добавляем фильтр absoluteUrl
  eleventyConfig.addFilter("absoluteUrl", function(url) {
    const baseUrl = "https://skolam-net.ru3"; // Замените на реальный URL при деплое
    if (url.startsWith("http")) {
      return url;
    }
    if (url.startsWith("/")) {
      return baseUrl + url;
    }
    return baseUrl + "/" + url;
  });
  
  // Добавляем фильтр для генерации хлебных крошек
  eleventyConfig.addFilter("breadcrumbs", function(page) {
    const pathParts = page.filePathStem.split("/").filter(part => part !== "");
    const breadcrumbs = [];
    
    // Добавляем главную страницу
    breadcrumbs.push({
      title: "Главная",
      url: "/"
    });
    
    // Добавляем промежуточные страницы
    let currentPath = "/";
    for (let i = 0; i < pathParts.length - 1; i++) {
      currentPath += pathParts[i] + "/";
      const title = pathParts[i]
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      
      breadcrumbs.push({
        title: title,
        url: currentPath
      });
    }
    
    // Добавляем текущую страницу (если это не главная)
    if (pathParts.length > 0) {
      const currentPageTitle = pathParts[pathParts.length - 1]
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      
      breadcrumbs.push({
        title: currentPageTitle,
        url: page.url
      });
    }
    
    return breadcrumbs;
  });

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