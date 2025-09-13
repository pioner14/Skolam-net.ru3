const fs = require('fs');
const path = require('path');

// Функция для проверки наличия мета-тегов
function checkMetaTags(htmlContent, url) {
  const checks = {
    title: /<title>(.*?)<\/title>/i,
    description: /<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i,
    keywords: /<meta[^>]*name=["']keywords["'][^>]*content=["']([^"']*)["'][^>]*>/i,
    h1: /<h1[^>]*>(.*?)<\/h1>/i,
    images: /<img[^>]*src=["']([^"']*)["'][^>]*alt=["']([^"']*)["'][^>]*>/gi,
  };
  
  const results = {
    url,
    title: null,
    description: null,
    keywords: null,
    h1: null,
    imagesWithAlt: 0,
    totalImages: 0,
    issues: []
  };
  
  // Проверка title
  const titleMatch = htmlContent.match(checks.title);
  if (titleMatch) {
    results.title = titleMatch[1];
    if (results.title.length > 60) {
      results.issues.push('Title слишком длинный (более 60 символов)');
    }
  } else {
    results.issues.push('Отсутствует title');
  }
  
  // Проверка description
  const descMatch = htmlContent.match(checks.description);
  if (descMatch) {
    results.description = descMatch[1];
    if (results.description.length > 160) {
      results.issues.push('Description слишком длинный (более 160 символов)');
    }
  } else {
    results.issues.push('Отсутствует meta description');
  }
  
  // Проверка keywords
  const keywordsMatch = htmlContent.match(checks.keywords);
  if (!keywordsMatch) {
    results.issues.push('Отсутствуют meta keywords');
  } else {
    results.keywords = keywordsMatch[1];
  }
  
  // Проверка h1
  const h1Match = htmlContent.match(checks.h1);
  if (!h1Match) {
    results.issues.push('Отсутствует заголовок h1');
  } else {
    results.h1 = h1Match[1];
  }
  
  // Проверка изображений
  let imgMatch;
  while ((imgMatch = checks.images.exec(htmlContent)) !== null) {
    results.totalImages++;
    if (imgMatch[2] && imgMatch[2].trim() !== '') {
      results.imagesWithAlt++;
    }
  }
  
  if (results.totalImages > 0 && results.imagesWithAlt < results.totalImages) {
    results.issues.push(`Недостаточно alt-тегов у изображений: ${results.imagesWithAlt}/${results.totalImages}`);
  }
  
  return results;
}

// Функция для проверки всех HTML файлов в директории
function checkAllPages() {
  const siteDir = path.join(__dirname, '..', '_site');
  const results = [];
  
  if (!fs.existsSync(siteDir)) {
    console.log('Директория _site не найдена. Запустите сборку сайта сначала.');
    return;
  }
  
  function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        processDirectory(filePath);
      } else if (file.endsWith('.html')) {
        const content = fs.readFileSync(filePath, 'utf8');
        const relativePath = path.relative(siteDir, filePath);
        const url = '/' + relativePath.replace(/\\\\/g, '/').replace(/index\\.html$/, '');
        const pageResults = checkMetaTags(content, url);
        results.push(pageResults);
      }
    });
  }
  
  processDirectory(siteDir);
  
  // Вывод результатов
  console.log('=== РЕЗУЛЬТАТЫ SEO АУДИТА ===\\n');
  
  results.forEach(result => {
    console.log(`Страница: ${result.url}`);
    console.log(`Title: ${result.title || 'Отсутствует'}`);
    console.log(`Description: ${result.description || 'Отсутствует'}`);
    console.log(`H1: ${result.h1 || 'Отсутствует'}`);
    console.log(`Изображений с alt: ${result.imagesWithAlt}/${result.totalImages}`);
    
    if (result.issues.length > 0) {
      console.log('Проблемы:');
      result.issues.forEach(issue => {
        console.log(`  - ${issue}`);
      });
    } else {
      console.log('Проблемы не найдены');
    }
    
    console.log('---\\n');
  });
  
  // Сводка
  const totalIssues = results.reduce((sum, result) => sum + result.issues.length, 0);
  console.log(`Всего страниц: ${results.length}`);
  console.log(`Всего проблем: ${totalIssues}`);
  
  if (totalIssues === 0) {
    console.log('Поздравляем! Все страницы прошли SEO проверку без ошибок.');
  } else {
    console.log('Рекомендуется исправить указанные проблемы для улучшения SEO.');
  }
}

// Запуск проверки
checkAllPages();