---
layout: base.njk
title: Калькулятор стоимости ремонта
description: Рассчитайте стоимость ремонта скола или трещины в лобовом стекле онлайн
keywords: калькулятор, стоимость, ремонт, скол, трещина, лобовое стекло
---

# Калькулятор стоимости ремонта

<div class="calculator-container">
  <div class="info-block">
    <p><strong>Важно:</strong> Представленная стоимость является ориентировочной. Точная стоимость будет определена после осмотра повреждения нашим специалистом.</p>
  </div>
  
  <form class="calculator-form">
    <div class="form-group">
      <label for="damage-type">Тип повреждения:</label>
      <select id="damage-type" name="damage-type" class="form-control" required>
        <option value="">Выберите тип повреждения</option>
        <option value="scuff">Скол</option>
        <option value="crack-stop">Остановка трещины</option>
        <option value="crack-fill">Заливка трещины</option>
      </select>
    </div>
    
    <div class="form-group" id="crack-length-group" style="display: none;">
      <label for="crack-length">Длина трещины (см):</label>
      <input type="number" id="crack-length" name="crack-length" class="form-control" min="1" max="200" step="0.5" placeholder="Введите длину трещины в сантиметрах">
    </div>
    
    <button type="button" id="calculate-btn" class="btn-primary">Рассчитать стоимость</button>
  </form>
  
  <div class="result-container" id="result-container" style="display: none;">
    <h3>Результат расчета:</h3>
    <div class="result-details" id="result-details"></div>
    <div class="calculation-explanation" id="calculation-explanation"></div>
    <button id="book-service-btn" class="btn-primary">Записаться на ремонт</button>
  </div>
  
  <div class="info-section">
    <h3>Как пользоваться калькулятором:</h3>
    <ol>
      <li>Выберите тип повреждения из списка</li>
      <li>Для заливки трещины введите её длину в сантиметрах</li>
      <li>Нажмите кнопку "Рассчитать стоимость"</li>
      <li>Ознакомьтесь с ориентировочной стоимостью и подробным расчетом</li>
      <li>При необходимости запишитесь на ремонт</li>
    </ol>
    
    <h3>Факторы, влияющие на стоимость ремонта:</h3>
    <ul>
      <li><strong>Размер повреждения</strong> — чем больше повреждение, тем выше стоимость</li>
      <li><strong>Расположение</strong> — ремонт в зоне обзора водителя стоит дороже</li>
      <li><strong>Глубина повреждения</strong> — глубокие повреждения сложнее ремонтировать</li>
      <li><strong>Время с момента повреждения</strong> — старые повреждения требуют больше времени</li>
      <li><strong>Загрязнение</strong> — загрязненные повреждения требуют дополнительной очистки</li>
    </ul>
  </div>
</div>

<style>
  .calculator-container {
    max-width: 700px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    color: #333333;
  }
  
  .calculator-container h1,
  .calculator-container h2,
  .calculator-container h3 {
    color: #730800;
    background-color: transparent;
    padding: 0;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .calculator-container h1 {
    margin-top: 0;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #333333;
  }
  
  .form-control {
    width: 100%;
    padding: 12px;
    border: 2px solid #feb072;
    border-radius: 4px;
    font-size: 16px;
    background-color: #ffffff;
    color: #333333;
    transition: border-color 0.3s ease;
  }
  
  .form-control:focus {
    outline: none;
    border-color: #e08a4a;
    box-shadow: 0 0 0 3px rgba(254, 176, 114, 0.25);
  }
  
  .result-container {
    margin-top: 20px;
    padding: 20px;
    background-color: #e8f5e9;
    border-radius: 8px;
    border: 1px solid #4caf50;
    color: #333333;
  }
  
  .result-details {
    margin: 15px 0;
    font-size: 18px;
    font-weight: bold;
  }
  
  .calculation-explanation {
    margin: 15px 0;
    padding: 15px;
    background-color: #ffffff;
    border-radius: 4px;
    border-left: 4px solid #4caf50;
  }
  
  .calculation-explanation h4 {
    margin-top: 0;
    color: #730800;
  }
  
  .calculation-explanation ul {
    padding-left: 20px;
  }
  
  .calculation-explanation li {
    margin-bottom: 5px;
  }
  
  .info-section {
    margin-top: 30px;
    padding: 20px;
    background-color: #e3f2fd;
    border-radius: 8px;
    color: #333333;
  }
  
  .info-section h3 {
    margin-top: 0;
  }
  
  .info-section ul,
  .info-section ol {
    padding-left: 20px;
  }
  
  .info-section li {
    margin-bottom: 10px;
  }
  
  .btn-primary {
    background-color: #feb072;
    color: #440501;
    border: none;
    padding: 12px 24px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    display: inline-block;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
  }
  
  .btn-primary:hover {
    background-color: #e08a4a;
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    transform: translateY(-2px);
  }
  
  .btn-primary:focus {
    outline: 2px dashed #730800;
    outline-offset: 2px;
  }
  
  .info-block {
    background-color: #fff3cd;
    border: 1px solid #ffeaa7;
    border-radius: 4px;
    padding: 15px;
    margin-bottom: 20px;
    color: #333333;
  }
  
  .info-block p {
    margin: 0;
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const damageTypeSelect = document.getElementById('damage-type');
    const crackLengthGroup = document.getElementById('crack-length-group');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultContainer = document.getElementById('result-container');
    const resultDetails = document.getElementById('result-details');
    const calculationExplanation = document.getElementById('calculation-explanation');
    const bookServiceBtn = document.getElementById('book-service-btn');
    const crackLengthInput = document.getElementById('crack-length');
    
    // Показываем/скрываем поле для длины трещины в зависимости от типа повреждения
    damageTypeSelect.addEventListener('change', function() {
      if (this.value === 'crack-fill') {
        crackLengthGroup.style.display = 'block';
      } else {
        crackLengthGroup.style.display = 'none';
        crackLengthInput.value = '';
      }
    });
    
    // Расчет стоимости
    calculateBtn.addEventListener('click', function() {
      const damageType = damageTypeSelect.value;
      const crackLength = parseFloat(crackLengthInput.value);
      
      if (!damageType) {
        alert('Пожалуйста, выберите тип повреждения');
        damageTypeSelect.focus();
        return;
      }
      
      if (damageType === 'crack-fill' && (!crackLength || crackLength <= 0)) {
        alert('Пожалуйста, введите длину трещины');
        crackLengthInput.focus();
        return;
      }
      
      let cost = 0;
      let description = '';
      let explanation = '';
      
      switch(damageType) {
        case 'scuff':
          cost = 1500;
          description = 'Ремонт скола';
          explanation = `
            <h4>Подробный расчет:</h4>
            <ul>
              <li><strong>Базовая стоимость ремонта скола:</strong> 1500 руб.</li>
              <li><strong>В расчет входит:</strong> материалы, работа специалиста, гарантия</li>
              <li><strong>Примечание:</strong> Цена фиксированная независимо от размера скола</li>
            </ul>
          `;
          break;
        case 'crack-stop':
          cost = 1500;
          description = 'Остановка трещины';
          explanation = `
            <h4>Подробный расчет:</h4>
            <ul>
              <li><strong>Базовая стоимость остановки трещины:</strong> 1500 руб.</li>
              <li><strong>В расчет входит:</strong> материалы, работа специалиста, гарантия</li>
              <li><strong>Примечание:</strong> Цена фиксированная независимо от длины трещины</li>
            </ul>
          `;
          break;
        case 'crack-fill':
          cost = crackLength * 50;
          description = `Заливка трещины (${crackLength} см)`;
          explanation = `
            <h4>Подробный расчет:</h4>
            <ul>
              <li><strong>Длина трещины:</strong> ${crackLength} см</li>
              <li><strong>Стоимость за 1 см:</strong> 50 руб.</li>
              <li><strong>Итоговая стоимость:</strong> ${crackLength} см × 50 руб./см = ${cost} руб.</li>
              <li><strong>В расчет входит:</strong> материалы, работа специалиста, гарантия</li>
            </ul>
          `;
          break;
      }
      
      resultDetails.innerHTML = `
        <p><strong>Услуга:</strong> ${description}</p>
        <p><strong>Ориентировочная стоимость:</strong> ${cost} руб.</p>
      `;
      
      calculationExplanation.innerHTML = explanation;
      
      resultContainer.style.display = 'block';
      
      // Прокручиваем к результатам
      resultContainer.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Кнопка записи на ремонт
    bookServiceBtn.addEventListener('click', function() {
      const phone = '89150054660';
      if (confirm('Вы будете перенаправлены в приложение для звонка. Продолжить?')) {
        window.location.href = `tel:${phone}`;
      }
    });
    
    // Добавляем обработку нажатия Enter в полях ввода
    damageTypeSelect.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        calculateBtn.click();
      }
    });
    
    crackLengthInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        calculateBtn.click();
      }
    });
  });
</script>