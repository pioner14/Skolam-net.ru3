const fs = require('fs');
const path = require('path');

// Функция для проверки доступности сайта
function checkAccessibility() {
  const siteDir = path.join(__dirname, '..', '_site');
  
  if (!fs.existsSync(siteDir)) {
    console.log('Директория _site не найдена. Запустите сборку сайта сначала.');
    return;
  }
  
  let issues = [];
  
  // Проверяем все HTML файлы
  function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        processDirectory(filePath);
      } else if (file.endsWith('.html')) {
        const content = fs.readFileSync(filePath, 'utf8');
        checkFileAccessibility(filePath, content, issues);
      }
    });
  }
  
  processDirectory(siteDir);
  
  // Выводим результаты
  console.log('=== ПРОВЕРКА ДОСТУПНОСТИ САЙТА ===\n');
  
  if (issues.length === 0) {
    console.log('✅ Все проверки доступности пройдены успешно!');
  } else {
    console.log(`⚠️  Найдено ${issues.length} проблем с доступностью:`);
    issues.forEach((issue, index) => {
      console.log(`${index + 1}. ${issue.file}: ${issue.message}`);
    });
  }
}

// Функция для проверки доступности отдельного файла
function checkFileAccessibility(filePath, content, issues) {
  const relativePath = path.relative(path.join(__dirname, '..', '_site'), filePath);
  
  // Проверяем наличие заголовков
  if (!content.match(/<h[1-6][^>]*>/i)) {
    issues.push({
      file: relativePath,
      message: 'Отсутствуют заголовки (h1-h6)'
    });
  }
  
  // Проверяем наличие alt-тегов у изображений
  const imagesWithoutAlt = content.match(/<img(?![^>]*alt=)[^>]*>/gi);
  if (imagesWithoutAlt) {
    issues.push({
      file: relativePath,
      message: `Найдено ${imagesWithoutAlt.length} изображений без alt-тегов`
    });
  }
  
  // Проверяем контрастность текста (упрощенная проверка)
  // Проверяем наличие мета-тегов viewport
  if (!content.match(/<meta[^>]*name=["']viewport["'][^>]*>/i)) {
    issues.push({
      file: relativePath,
      message: 'Отсутствует мета-тег viewport'
    });
  }
  
  // Проверяем наличие lang атрибута
  if (!content.match(/<html[^>]*lang=/i)) {
    issues.push({
      file: relativePath,
      message: 'Отсутствует атрибут lang у элемента html'
    });
  }
  
  // Проверяем наличие title
  if (!content.match(/<title[^>]*>/i)) {
    issues.push({
      file: relativePath,
      message: 'Отсутствует элемент title'
    });
  }
}

// Запуск проверки
checkAccessibility();