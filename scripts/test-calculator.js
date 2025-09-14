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
      selector: 'id="calculator-form"',
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
}

// Запускаем тестирование
testCalculator();