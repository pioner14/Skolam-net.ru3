const fs = require('fs');
const path = require('path');

// Функция для тестирования страницы отзывов
function testReviewsPage() {
  console.log('=== ТЕСТИРОВАНИЕ СТРАНИЦЫ ОТЗЫВОВ ===\n');
  
  // Проверяем наличие файлов
  const reviewsFile = path.join(__dirname, '..', '_site', 'otzyvy', 'index.html');
  const indexFile = path.join(__dirname, '..', '_site', 'index.html');
  
  if (fs.existsSync(reviewsFile)) {
    console.log('✅ Файл страницы отзывов создан успешно');
  } else {
    console.log('❌ Файл страницы отзывов не найден');
    return;
  }
  
  // Читаем содержимое файлов
  const reviewsContent = fs.readFileSync(reviewsFile, 'utf8');
  const indexContent = fs.readFileSync(indexFile, 'utf8');
  
  // Проверяем наличие ключевых элементов на странице отзывов
  const checks = [
    { 
      name: 'Наличие заголовка страницы отзывов', 
      selector: '<h1>Отзывы клиентов</h1>',
      file: reviewsContent
    },
    { 
      name: 'Наличие формы отзывов', 
      selector: 'id="review-form"',
      file: reviewsContent
    },
    { 
      name: 'Наличие поля для имени', 
      selector: 'id="reviewer-name"',
      file: reviewsContent
    },
    { 
      name: 'Наличие рейтинга (звезд)', 
      selector: 'class="rating-stars"',
      file: reviewsContent
    },
    { 
      name: 'Наличие поля для текста отзыва', 
      selector: 'id="review-text"',
      file: reviewsContent
    },
    { 
      name: 'Наличие списка отзывов', 
      selector: 'id="reviews-list"',
      file: reviewsContent
    },
    { 
      name: 'Наличие примеров отзывов', 
      selector: 'class="review-item"',
      file: reviewsContent
    },
    { 
      name: 'Наличие ссылки на страницу отзывов в меню', 
      selector: '<a href="/otzyvy/">Отзывы</a>',
      file: indexContent
    },
    { 
      name: 'Наличие ссылки на страницу отзывов в футере', 
      selector: '<a href="/otzyvy/">Отзывы</a>',
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
    console.log('\n🎉 Все проверки пройдены успешно! Страница отзывов готова к использованию.');
  } else {
    console.log('\n⚠️  Найдены проблемы, требующие исправления.');
  }
  
  // Дополнительные проверки на улучшения юзабилити
  console.log('\n=== ДОПОЛНИТЕЛЬНЫЕ ПРОВЕРКИ ЮЗАБИЛИТИ ===');
  
  const usabilityChecks = [
    { 
      name: 'Улучшенные стили для полей ввода', 
      selector: 'class="form-control"',
      file: reviewsContent
    },
    { 
      name: 'Улучшенные стили для кнопок', 
      selector: 'class="btn-primary"',
      file: reviewsContent
    },
    { 
      name: 'Улучшенный стиль контейнера отзывов', 
      selector: 'class="reviews-container"',
      file: reviewsContent
    },
    { 
      name: 'Улучшенный стиль формы отзывов', 
      selector: 'class="review-form-container"',
      file: reviewsContent
    },
    { 
      name: 'Улучшенный стиль списка отзывов', 
      selector: 'class="reviews-list-container"',
      file: reviewsContent
    }
  ];
  
  let usabilityPassed = 0;
  let usabilityFailed = 0;
  
  usabilityChecks.forEach(check => {
    if (check.file.includes(check.selector)) {
      console.log(`✅ ${check.name}`);
      usabilityPassed++;
    } else {
      console.log(`❌ ${check.name}`);
      usabilityFailed++;
    }
  });
  
  console.log(`\nПройдено: ${usabilityPassed}`);
  console.log(`Провалено: ${usabilityFailed}`);
  console.log(`Общий результат: ${usabilityFailed === 0 ? '✅ УЛУЧШЕНИЯ ЮЗАБИЛИТИ ВНЕСЕНЫ' : '❌ НЕОБХОДИМЫ ДОПОЛНИТЕЛЬНЫЕ УЛУЧШЕНИЯ'}`);
}

// Запускаем тестирование
testReviewsPage();