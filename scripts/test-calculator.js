const fs = require('fs');
const path = require('path');

// Функция для тестирования калькулятора
function testCalculator() {
  console.log('=== ТЕСТИРОВАНИЕ КАЛЬКУЛЯТОРА ===\n');
  
  // Проверяем наличие файлов
  const calculatorFile = path.join(__dirname, '..', '_site', 'calculator', 'index.html');
  const indexFile = path.join(__dirname, '..', '_site', 'index.html');
  const stoimostFile = path.join(__dirname, '..', '_site', 'stoimost', 'index.html');
  
  if (fs.existsSync(calculatorFile)) {
    console.log('✅ Файл калькулятора создан успешно');
  } else {
    console.log('❌ Файл калькулятора не найден');
    return;
  }
  
  // Читаем содержимое файлов
  const calculatorContent = fs.readFileSync(calculatorFile, 'utf8');
  const indexContent = fs.readFileSync(indexFile, 'utf8');
  const stoimostContent = fs.readFileSync(stoimostFile, 'utf8');
  
  // Проверяем наличие ключевых элементов в калькуляторе
  const checks = [
    { 
      name: 'Наличие заголовка калькулятора', 
      selector: '<h1>Калькулятор стоимости ремонта</h1>',
      file: calculatorContent
    },
    { 
      name: 'Наличие формы калькулятора', 
      selector: 'class="calculator-form"',
      file: calculatorContent
    },
    { 
      name: 'Наличие селекта типов повреждений', 
      selector: 'id="damage-type"',
      file: calculatorContent
    },
    { 
      name: 'Наличие поля для длины трещины', 
      selector: 'id="crack-length"',
      file: calculatorContent
    },
    { 
      name: 'Наличие кнопки расчета', 
      selector: 'id="calculate-btn"',
      file: calculatorContent
    },
    { 
      name: 'Наличие информации о факторах стоимости', 
      selector: 'Факторы, влияющие на стоимость ремонта:',
      file: calculatorContent
    },
    { 
      name: 'Наличие инструкции по использованию', 
      selector: 'Как пользоваться калькулятором:',
      file: calculatorContent
    },
    { 
      name: 'Наличие placeholder в поле длины трещины', 
      selector: 'placeholder="Введите длину трещины в сантиметрах"',
      file: calculatorContent
    },
    { 
      name: 'Наличие ссылки на калькулятор в меню', 
      selector: '<a href="/calculator/">Калькулятор</a>',
      file: indexContent
    },
    { 
      name: 'Наличие ссылки на калькулятор на странице стоимости', 
      selector: '<a href="/calculator/">онлайн калькулятором</a>',
      file: stoimostContent
    },
    { 
      name: 'Наличие упоминания калькулятора на главной странице', 
      selector: 'Воспользуйтесь нашим <a href="/calculator/">онлайн калькулятором</a>',
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
    console.log('\n🎉 Все проверки пройдены успешно! Калькулятор готов к использованию.');
  } else {
    console.log('\n⚠️  Найдены проблемы, требующие исправления.');
  }
  
  // Дополнительные проверки на улучшения юзабилити
  console.log('\n=== ДОПОЛНИТЕЛЬНЫЕ ПРОВЕРКИ ЮЗАБИЛИТИ ===');
  
  const usabilityChecks = [
    { 
      name: 'Улучшенные стили для полей ввода', 
      selector: 'class="form-control"',
      file: calculatorContent
    },
    { 
      name: 'Улучшенные стили для кнопок', 
      selector: 'class="btn-primary"',
      file: calculatorContent
    },
    { 
      name: 'Улучшенный стиль контейнера калькулятора', 
      selector: 'class="calculator-container"',
      file: calculatorContent
    },
    { 
      name: 'Улучшенный стиль блока результатов', 
      selector: 'class="result-container"',
      file: calculatorContent
    },
    { 
      name: 'Наличие блока с объяснением расчета', 
      selector: 'class="calculation-explanation"',
      file: calculatorContent
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
  
  // Проверка функциональности калькулятора
  console.log('\n=== ПРОВЕРКА ФУНКЦИОНАЛЬНОСТИ ===');
  
  const functionalityChecks = [
    { 
      name: 'Наличие подробного объяснения расчета для скола', 
      selector: 'Базовая стоимость ремонта скола:',
      file: calculatorContent
    },
    { 
      name: 'Наличие подробного объяснения расчета для остановки трещины', 
      selector: 'Базовая стоимость остановки трещины:',
      file: calculatorContent
    },
    { 
      name: 'Наличие подробного объяснения расчета для заливки трещины', 
      selector: 'Стоимость за 1 см:',
      file: calculatorContent
    }
  ];
  
  let functionalityPassed = 0;
  let functionalityFailed = 0;
  
  functionalityChecks.forEach(check => {
    if (check.file.includes(check.selector)) {
      console.log(`✅ ${check.name}`);
      functionalityPassed++;
    } else {
      console.log(`❌ ${check.name}`);
      functionalityFailed++;
    }
  });
  
  console.log(`\nПройдено: ${functionalityPassed}`);
  console.log(`Провалено: ${functionalityFailed}`);
  console.log(`Общий результат: ${functionalityFailed === 0 ? '✅ ФУНКЦИОНАЛЬНОСТЬ РЕАЛИЗОВАНА' : '❌ НЕОБХОДИМО ДОРАБОТАТЬ ФУНКЦИОНАЛЬНОСТЬ'}`);
}

// Запускаем тестирование
testCalculator();

// Запускаем тестирование
testCalculator();