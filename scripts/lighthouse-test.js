const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs').promises;
const path = require('path');

async function runLighthouse() {
  // Запускаем Chrome
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  
  // Настройки для Lighthouse
  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port
  };
  
  // URL для тестирования
  const url = 'http://localhost:8080'; // URL локального сервера Eleventy
  
  try {
    // Запускаем Lighthouse
    const runnerResult = await lighthouse(url, options);
    
    // Получаем результаты
    const reportHtml = runnerResult.report;
    const lhr = runnerResult.lhr;
    
    // Сохраняем отчет
    const reportPath = path.join(__dirname, '../lighthouse-report.html');
    await fs.writeFile(reportPath, reportHtml);
    
    // Выводим основные метрики
    console.log('Результаты Lighthouse:');
    console.log(`Performance: ${lhr.categories.performance.score * 100}`);
    console.log(`Accessibility: ${lhr.categories.accessibility.score * 100}`);
    console.log(`Best Practices: ${lhr.categories['best-practices'].score * 100}`);
    console.log(`SEO: ${lhr.categories.seo.score * 100}`);
    
    // Сохраняем JSON отчет
    const jsonReportPath = path.join(__dirname, '../lighthouse-report.json');
    await fs.writeFile(jsonReportPath, JSON.stringify(lhr, null, 2));
    
    console.log(`

Отчет сохранен в:`);
    console.log(`- ${reportPath}`);
    console.log(`- ${jsonReportPath}`);
    
  } catch (error) {
    console.error('Ошибка при запуске Lighthouse:', error);
  } finally {
    // Закрываем Chrome
    await chrome.kill();
  }
}

runLighthouse();