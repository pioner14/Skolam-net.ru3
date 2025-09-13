const CleanCSS = require('clean-css');
const fs = require('fs').promises;
const path = require('path');

const inputCssPath = path.join(__dirname, '../src/css/style.css');
const outputCssPath = path.join(__dirname, '../src/css/style.min.css');

async function minifyCSS() {
  try {
    // Читаем CSS файл
    const cssContent = await fs.readFile(inputCssPath, 'utf8');
    
    // Минифицируем CSS
    const minified = new CleanCSS({
      level: 2,
      compatibility: 'ie9'
    }).minify(cssContent);
    
    // Записываем минифицированный CSS
    await fs.writeFile(outputCssPath, minified.styles);
    
    console.log('CSS успешно минифицирован!');
    console.log(`Исходный размер: ${cssContent.length} байт`);
    console.log(`Минифицированный размер: ${minified.styles.length} байт`);
    console.log(`Сжатие: ${((cssContent.length - minified.styles.length) / cssContent.length * 100).toFixed(2)}%`);
  } catch (error) {
    console.error('Ошибка при минификации CSS:', error);
  }
}

minifyCSS();