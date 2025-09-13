const fs = require('fs');
const path = require('path');

// Функция для генерации sitemap.xml
function generateSitemap() {
  const siteDir = path.join(__dirname, '..', '_site');
  const baseUrl = 'https://skolam-net.ru3'; // Замените на реальный URL при деплое
  
  if (!fs.existsSync(siteDir)) {
    console.log('Директория _site не найдена. Запустите сборку сайта сначала.');
    return;
  }
  
  // Получаем список всех HTML файлов
  const htmlFiles = [];
  
  function processDirectory(dir, baseDir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        processDirectory(filePath, baseDir);
      } else if (file.endsWith('.html')) {
        const relativePath = path.relative(baseDir, filePath);
        const urlPath = '/' + relativePath.replace(/\\\\/g, '/').replace(/index\\.html$/, '').replace(/\\.html$/, '');
        htmlFiles.push(urlPath);
      }
    });
  }
  
  processDirectory(siteDir, siteDir);
  
  // Сортируем файлы
  htmlFiles.sort();
  
  // Генерируем sitemap.xml
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\
';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\
';
  
  htmlFiles.forEach(file => {
    sitemap += '  <url>\
';
    sitemap += `    <loc>${baseUrl}${file}</loc>\
`;
    sitemap += '    <changefreq>monthly</changefreq>\
';
    sitemap += '    <priority>0.8</priority>\
';
    sitemap += '  </url>\
';
  });
  
  sitemap += '</urlset>';
  
  // Записываем sitemap.xml в src директорию
  const sitemapPath = path.join(__dirname, '..', 'src', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  
  console.log(`Сгенерирован sitemap.xml с ${htmlFiles.length} страницами`);
  console.log(`Файл сохранен: ${sitemapPath}`);
}

// Запуск генерации
generateSitemap();