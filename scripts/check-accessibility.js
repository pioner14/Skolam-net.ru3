const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const util = require('util');

const execPromise = util.promisify(exec);

async function checkAccessibility() {
  try {
    // Сначала собираем сайт
    console.log('Собираем сайт...');
    await execPromise('npx @11ty/eleventy');
    
    // Проверяем доступность HTML файлов
    const siteDir = path.join(__dirname, '../_site');
    
    // Для простоты проверим только главную страницу
    const mainPagePath = path.join(siteDir, 'index.html');
    const mainPageContent = await fs.readFile(mainPagePath, 'utf8');
    
    // Проверяем основные элементы доступности
    const checks = [
      {
        name: 'Наличие заголовков',
        check: () => /<h[1-6][^>]*>/.test(mainPageContent),
        description: 'Страница должна содержать заголовки'
      },
      {
        name: 'Наличие альтернативного текста для изображений',
        check: () => /<img[^>]*alt=["'][^"']*["']/.test(mainPageContent),
        description: 'Все изображения должны иметь атрибут alt'
      },
      {
        name: 'Наличие мета-описания',
        check: () => /<meta[^>]*name=["']description["'][^>]*content=["'][^"']*["']/.test(mainPageContent),
        description: 'Страница должна содержать мета-тег description'
      },
      {
        name: 'Наличие заголовка страницы',
        check: () => /<title[^>]*>[^<]+<\/title>/.test(mainPageContent),
        description: 'Страница должна содержать заголовок'
      },
      {
        name: 'Наличие языка страницы',
        check: () => /<html[^>]*lang=["'][^"']*["']/.test(mainPageContent),
        description: 'HTML должен содержать атрибут lang'
      }
    ];
    
    console.log('\nРезультаты проверки доступности:');
    console.log('==============================');
    
    let passed = 0;
    let total = checks.length;
    
    for (const check of checks) {
      const result = check.check();
      console.log(`${result ? '✓' : '✗'} ${check.name}`);
      if (!result) {
        console.log(`  ${check.description}`);
      } else {
        passed++;
      }
      console.log('');
    }
    
    console.log(`Пройдено: ${passed}/${total} проверок`);
    
    if (passed === total) {
      console.log('🎉 Все проверки доступности пройдены!');
    } else {
      console.log('⚠️  Некоторые проверки не пройдены. Рекомендуется улучшить доступность сайта.');
    }
    
  } catch (error) {
    console.error('Ошибка при проверке доступности:', error);
  }
}

checkAccessibility();