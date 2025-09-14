const fs = require('fs');
const path = require('path');

// Функция для тестирования функции геолокации
function testGeolocation() {
  console.log('=== ТЕСТИРОВАНИЕ ФУНКЦИИ ГЕОЛОКАЦИИ ===\n');
  
  // Проверяем наличие файлов
  const indexFile = path.join(__dirname, '..', '_site', 'index.html');
  
  if (fs.existsSync(indexFile)) {
    console.log('✅ Файл главной страницы существует');
  } else {
    console.log('❌ Файл главной страницы не найден');
    return;
  }
  
  // Читаем содержимое файла
  const indexContent = fs.readFileSync(indexFile, 'utf8');
  
  // Проверяем наличие ключевых элементов функции геолокации
  const checks = [
    { 
      name: 'Наличие контейнера для информации о местоположении', 
      selector: 'id="location-info"',
      file: indexContent
    },
    { 
      name: 'Наличие элемента для сообщения о местоположении', 
      selector: 'id="location-message"',
      file: indexContent
    },
    { 
      name: 'Наличие JavaScript кода для геолокации', 
      selector: 'navigator.geolocation',
      file: indexContent
    },
    { 
      name: 'Наличие функции расчета расстояния', 
      selector: 'calculateDistance',
      file: indexContent
    }
  ];
  
  let passed = 0;
  let failed = 0;
  
  checks.forEach(check => {
    if (check.file.includes(check.selector)) {
      console.log(`✅ ${check.name}`);
      passed++;
    } else {
      console.log(`❌ ${check.name}`);
      failed++;
    }
  });
  
  console.log(`\n=== РЕЗУЛЬТАТЫ ТЕСТИРОВАНИЯ ===`);
  console.log(`Пройдено: ${passed}`);
  console.log(`Провалено: ${failed}`);
  console.log(`Общий результат: ${failed === 0 ? '✅ УСПЕШНО' : '❌ ЕСТЬ ПРОБЛЕМЫ'}`);
  
  if (failed === 0) {
    console.log('\n🎉 Все проверки пройдены успешно! Функция геолокации готова к использованию.');
  } else {
    console.log('\n⚠️  Найдены проблемы, требующие исправления.');
  }
}

// Запускаем тестирование
testGeolocation();