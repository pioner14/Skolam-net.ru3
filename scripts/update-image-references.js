const fs = require('fs');
const path = require('path');

// Функция для обновления ссылок на изображения в HTML файлах
function updateImageReferences() {
  const siteDir = path.join(__dirname, '..', '_site');
  
  if (!fs.existsSync(siteDir)) {
    console.log('Директория _site не найдена. Запустите сборку сайта сначала.');
    return;
  }
  
  // Обрабатываем все HTML файлы
  function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        processDirectory(filePath);
      } else if (file.endsWith('.html')) {
        updateHtmlFile(filePath);
      }
    });
  }
  
  processDirectory(siteDir);
  console.log('Обновление ссылок на изображения завершено!');
}

// Функция для обновления одного HTML файла
function updateHtmlFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Заменяем ссылки на GIF файлы на WebP с фолбэком на оригиналы
  content = content.replace(/<img([^>]*?)src="([^"]*?)\.gif"([^>]*?)>/g, 
    '<picture><source srcset="$2.webp" type="image/webp"><source srcset="$2.avif" type="image/avif"><img$1src="$2.gif"$3></picture>');
  
  // Заменяем ссылки на JPG файлы на WebP с фолбэком на оригиналы
  content = content.replace(/<img([^>]*?)src="([^"]*?)\.jpg"([^>]*?)>/g, 
    '<picture><source srcset="$2.webp" type="image/webp"><source srcset="$2.avif" type="image/avif"><img$1src="$2.jpg"$3></picture>');
  
  // Обновляем CSS ссылки
  content = content.replace(/url\(['"]([^'"]*?)\.gif['"]\)/g, 
    'url("$1.webp")');
  content = content.replace(/url\(['"]([^'"]*?)\.jpg['"]\)/g, 
    'url("$1.webp")');
  
  fs.writeFileSync(filePath, content, 'utf8');
}

// Запуск обновления
updateImageReferences();