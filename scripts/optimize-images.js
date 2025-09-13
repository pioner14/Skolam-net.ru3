const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const inputDir = path.join(__dirname, '../src/images');

async function optimizeImages() {
  try {
    // Получаем список файлов в директории
    const files = await fs.readdir(inputDir);
    
    // Фильтруем только изображения
    const imageFiles = files.filter(file => 
      file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')
    );
    
    console.log(`Найдено ${imageFiles.length} изображений для оптимизации`);
    
    // Оптимизируем каждое изображение
    for (const file of imageFiles) {
      const filePath = path.join(inputDir, file);
      const outputPath = filePath; // Перезаписываем оригинальный файл
      
      try {
        // Получаем информацию об изображении
        const metadata = await sharp(filePath).metadata();
        
        console.log(`Оптимизируем ${file} (${metadata.width}x${metadata.height})`);
        
        // Оптимизируем изображение
        if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
          await sharp(filePath)
            .jpeg({ quality: 80, progressive: true })
            .toFile(outputPath + '.tmp');
        } else if (file.endsWith('.png')) {
          await sharp(filePath)
            .png({ quality: 80, compressionLevel: 9 })
            .toFile(outputPath + '.tmp');
        }
        
        // Заменяем оригинальный файл оптимизированной версией
        await fs.rename(outputPath + '.tmp', outputPath);
        
        console.log(`✓ ${file} успешно оптимизировано`);
      } catch (error) {
        console.error(`Ошибка при оптимизации ${file}:`, error.message);
      }
    }
    
    console.log('Оптимизация изображений завершена!');
  } catch (error) {
    console.error('Ошибка при оптимизации изображений:', error);
  }
}

optimizeImages();