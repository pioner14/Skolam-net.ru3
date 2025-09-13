const fs = require('fs');
const path = require('path');

// Функция для анализа размера файлов сайта
function analyzeSiteSize() {
  const siteDir = path.join(__dirname, '..', '_site');
  
  if (!fs.existsSync(siteDir)) {
    console.log('Директория _site не найдена. Запустите сборку сайта сначала.');
    return;
  }
  
  let totalSize = 0;
  let fileCount = 0;
  const fileSizes = [];
  
  function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        processDirectory(filePath);
      } else {
        const size = stat.size;
        totalSize += size;
        fileCount++;
        fileSizes.push({
          path: path.relative(siteDir, filePath),
          size: size
        });
      }
    });
  }
  
  processDirectory(siteDir);
  
  // Сортируем файлы по размеру
  fileSizes.sort((a, b) => b.size - a.size);
  
  // Выводим результаты
  console.log('=== АНАЛИЗ РАЗМЕРА САЙТА ===\n');
  console.log(`Общий размер сайта: ${(totalSize / 1024).toFixed(2)} KB (${totalSize} bytes)`);
  console.log(`Количество файлов: ${fileCount}\n`);
  
  console.log('Самые большие файлы:');
  for (let i = 0; i < Math.min(10, fileSizes.length); i++) {
    const file = fileSizes[i];
    console.log(`  ${(file.size / 1024).toFixed(2)} KB - ${file.path}`);
  }
  
  // Рекомендации
  console.log('\n=== РЕКОМЕНДАЦИИ ===');
  if (totalSize > 5 * 1024 * 1024) {
    console.log('⚠️  Общий размер сайта превышает 5MB. Рекомендуется оптимизировать изображения и ресурсы.');
  } else {
    console.log('✅ Общий размер сайта в пределах нормы.');
  }
  
  const largeImages = fileSizes.filter(f => f.path.match(/\.(jpg|jpeg|png|gif)$/i) && f.size > 200 * 1024);
  if (largeImages.length > 0) {
    console.log(`⚠️  Найдено ${largeImages.length} больших изображений (более 200KB). Рекомендуется оптимизировать:`);
    largeImages.slice(0, 5).forEach(img => {
      console.log(`  - ${img.path} (${(img.size / 1024).toFixed(2)} KB)`);
    });
  }
  
  const largeCSS = fileSizes.filter(f => f.path.match(/\.css$/i) && f.size > 50 * 1024);
  if (largeCSS.length > 0) {
    console.log(`⚠️  Найдено ${largeCSS.length} больших CSS файлов (более 50KB). Рекомендуется минифицировать:`);
    largeCSS.forEach(css => {
      console.log(`  - ${css.path} (${(css.size / 1024).toFixed(2)} KB)`);
    });
  }
}

// Запуск анализа
analyzeSiteSize();