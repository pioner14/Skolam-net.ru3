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
    
    <div class="form-group" id="scuff-size-group" style="display: none;">
      <label for="scuff-size">Размер скола (мм):</label>
      <input type="number" id="scuff-size" name="scuff-size" class="form-control" min="1" max="50" step="0.5" placeholder="Введите размер скола в миллиметрах">
      <small class="form-text">Сколы до 10 мм включаются в базовую стоимость</small>
    </div>
    
    <div class="form-group" id="crack-length-group" style="display: none;">
      <label for="crack-length">Длина трещины (см):</label>
      <input type="number" id="crack-length" name="crack-length" class="form-control" min="1" max="200" step="0.5" placeholder="Введите длину трещины в сантиметрах">
    </div>
    
    <div class="form-group" id="time-since-damage-group" style="display: none;">
      <label for="time-since-damage">Время с момента повреждения:</label>
      <select id="time-since-damage" name="time-since-damage" class="form-control">
        <option value="0">Менее 1 дня</option>
        <option value="0">1-3 дня</option>
        <option value="200">4-7 дней</option>
        <option value="500">Более 7 дней</option>
      </select>
    </div>
    
    <div class="form-group" id="damage-location-group" style="display: none;">
      <label for="damage-location">Расположение повреждения:</label>
      <select id="damage-location" name="damage-location" class="form-control">
        <option value="0">Вне зоны обзора водителя</option>
        <option value="300">В зоне обзора водителя</option>
      </select>
    </div>
    
    <div class="form-group" id="damage-depth-group" style="display: none;">
      <label for="damage-depth">Глубина повреждения:</label>
      <select id="damage-depth" name="damage-depth" class="form-control">
        <option value="0">Поверхностное</option>
        <option value="200">Средняя глубина</option>
        <option value="500">Глубокое</option>
      </select>
    </div>
    
    <div class="form-group" id="contamination-group" style="display: none;">
      <label for="contamination">Загрязнение повреждения:</label>
      <select id="contamination" name="contamination" class="form-control">
        <option value="0">Нет загрязнения</option>
        <option value="100">Легкое загрязнение</option>
        <option value="300">Сильное загрязнение</option>
      </select>
    </div>
    
    <button type="button" id="calculate-btn" class="btn-primary">Рассчитать стоимость</button>
  </form>
  
  <div class="result-container" id="result-container" style="display: none;">
    <h3>Результат расчета:</h3>
    <div class="result-details" id="result-details"></div>
    <div class="calculation-explanation" id="calculation-explanation"></div>
    <div class="cost-breakdown" id="cost-breakdown"></div>
    <button id="book-service-btn" class="btn-primary">Записаться на ремонт</button>
  </div>
  
  <div class="info-section">
    <h3>Как пользоваться калькулятором:</h3>
    <ol>
      <li>Выберите тип повреждения из списка</li>
      <li>Заполните дополнительные параметры повреждения</li>
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
  
  .form-text {
    display: block;
    margin-top: 5px;
    font-size: 14px;
    color: #666666;
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
  
  .cost-breakdown {
    margin: 15px 0;
    padding: 15px;
    background-color: #ffffff;
    border-radius: 4px;
    border-left: 4px solid #2196f3;
  }
  
  .cost-breakdown h4 {
    margin-top: 0;
    color: #730800;
  }
  
  .cost-item {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    border-bottom: 1px solid #eeeeee;
  }
  
  .cost-total {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    font-weight: bold;
    font-size: 18px;
    border-top: 2px solid #333333;
    margin-top: 10px;
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
    const scuffSizeGroup = document.getElementById('scuff-size-group');
    const crackLengthGroup = document.getElementById('crack-length-group');
    const timeSinceDamageGroup = document.getElementById('time-since-damage-group');
    const damageLocationGroup = document.getElementById('damage-location-group');
    const damageDepthGroup = document.getElementById('damage-depth-group');
    const contaminationGroup = document.getElementById('contamination-group');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultContainer = document.getElementById('result-container');
    const resultDetails = document.getElementById('result-details');
    const calculationExplanation = document.getElementById('calculation-explanation');
    const costBreakdown = document.getElementById('cost-breakdown');
    const bookServiceBtn = document.getElementById('book-service-btn');
    const scuffSizeInput = document.getElementById('scuff-size');
    const crackLengthInput = document.getElementById('crack-length');
    const timeSinceDamageSelect = document.getElementById('time-since-damage');
    const damageLocationSelect = document.getElementById('damage-location');
    const damageDepthSelect = document.getElementById('damage-depth');
    const contaminationSelect = document.getElementById('contamination');
    
    // Показываем/скрываем поля в зависимости от типа повреждения
    damageTypeSelect.addEventListener('change', function() {
      // Скрываем все поля
      scuffSizeGroup.style.display = 'none';
      crackLengthGroup.style.display = 'none';
      timeSinceDamageGroup.style.display = 'none';
      damageLocationGroup.style.display = 'none';
      damageDepthGroup.style.display = 'none';
      contaminationGroup.style.display = 'none';
      
      // Очищаем значения
      scuffSizeInput.value = '';
      crackLengthInput.value = '';
      timeSinceDamageSelect.value = '0';
      damageLocationSelect.value = '0';
      damageDepthSelect.value = '0';
      contaminationSelect.value = '0';
      
      // Показываем нужные поля
      if (this.value) {
        timeSinceDamageGroup.style.display = 'block';
        damageLocationGroup.style.display = 'block';
        damageDepthGroup.style.display = 'block';
        contaminationGroup.style.display = 'block';
        
        if (this.value === 'scuff') {
          scuffSizeGroup.style.display = 'block';
        } else if (this.value === 'crack-fill') {
          crackLengthGroup.style.display = 'block';
        }
      }
    });
    
    // Расчет стоимости
    calculateBtn.addEventListener('click', function() {
      const damageType = damageTypeSelect.value;
      
      if (!damageType) {
        alert('Пожалуйста, выберите тип повреждения');
        damageTypeSelect.focus();
        return;
      }
      
      // Получаем значения параметров
      const scuffSize = parseFloat(scuffSizeInput.value) || 0;
      const crackLength = parseFloat(crackLengthInput.value) || 0;
      const timeSinceDamage = parseInt(timeSinceDamageSelect.value) || 0;
      const damageLocation = parseInt(damageLocationSelect.value) || 0;
      const damageDepth = parseInt(damageDepthSelect.value) || 0;
      const contamination = parseInt(contaminationSelect.value) || 0;
      
      // Валидация
      if (damageType === 'scuff' && (!scuffSize || scuffSize <= 0)) {
        alert('Пожалуйста, введите размер скола');
        scuffSizeInput.focus();
        return;
      }
      
      if (damageType === 'crack-fill' && (!crackLength || crackLength <= 0)) {
        alert('Пожалуйста, введите длину трещины');
        crackLengthInput.focus();
        return;
      }
      
      // Базовая стоимость в зависимости от типа повреждения
      let baseCost = 0;
      let description = '';
      
      switch(damageType) {
        case 'scuff':
          // Для сколов до 10 мм базовая стоимость 1500 руб.
          // Для сколов более 10 мм добавляем 100 руб. за каждый мм сверх 10
          if (scuffSize <= 10) {
            baseCost = 1500;
          } else {
            baseCost = 1500 + (scuffSize - 10) * 100;
          }
          description = `Ремонт скола (${scuffSize} мм)`;
          break;
        case 'crack-stop':
          baseCost = 1500;
          description = 'Остановка трещины';
          break;
        case 'crack-fill':
          baseCost = crackLength * 50;
          description = `Заливка трещины (${crackLength} см)`;
          break;
      }
      
      // Дополнительные коэффициенты
      const timeCost = timeSinceDamage;
      const locationCost = damageLocation;
      const depthCost = damageDepth;
      const contaminationCost = contamination;
      
      // Итоговая стоимость
      const totalCost = Math.round(baseCost + timeCost + locationCost + depthCost + contaminationCost);
      
      // Подробное объяснение расчета
      let explanation = `
        <h4>Подробный расчет:</h4>
        <ul>
      `;
      
      switch(damageType) {
        case 'scuff':
          if (scuffSize <= 10) {
            explanation += `<li><strong>Базовая стоимость ремонта скола:</strong> 1500 руб. (скол до 10 мм)</li>`;
          } else {
            explanation += `
              <li><strong>Базовая стоимость ремонта скола:</strong> 1500 руб. (за первые 10 мм)</li>
              <li><strong>Дополнительная стоимость:</strong> ${(scuffSize - 10) * 100} руб. (за ${scuffSize - 10} мм сверх 10 мм)</li>
            `;
          }
          break;
        case 'crack-stop':
          explanation += `<li><strong>Базовая стоимость остановки трещины:</strong> 1500 руб.</li>`;
          break;
        case 'crack-fill':
          explanation += `
            <li><strong>Длина трещины:</strong> ${crackLength} см</li>
            <li><strong>Стоимость за 1 см:</strong> 50 руб.</li>
            <li><strong>Базовая стоимость:</strong> ${crackLength} см × 50 руб./см = ${baseCost} руб.</li>
          `;
          break;
      }
      
      explanation += `
          <li><strong>В расчет входит:</strong> материалы, работа специалиста, гарантия</li>
        </ul>
      `;
      
      // Разбивка стоимости
      let breakdown = `
        <h4>Разбивка стоимости:</h4>
        <div class="cost-item">
          <span>Базовая стоимость:</span>
          <span>${baseCost} руб.</span>
        </div>
      `;
      
      if (timeCost > 0) {
        breakdown += `
          <div class="cost-item">
            <span>Время с момента повреждения:</span>
            <span>+${timeCost} руб.</span>
          </div>
        `;
      }
      
      if (locationCost > 0) {
        breakdown += `
          <div class="cost-item">
            <span>Расположение в зоне обзора:</span>
            <span>+${locationCost} руб.</span>
          </div>
        `;
      }
      
      if (depthCost > 0) {
        breakdown += `
          <div class="cost-item">
            <span>Глубина повреждения:</span>
            <span>+${depthCost} руб.</span>
          </div>
        `;
      }
      
      if (contaminationCost > 0) {
        breakdown += `
          <div class="cost-item">
            <span>Загрязнение повреждения:</span>
            <span>+${contaminationCost} руб.</span>
          </div>
        `;
      }
      
      breakdown += `
        <div class="cost-total">
          <span>Итоговая стоимость:</span>
          <span>${totalCost} руб.</span>
        </div>
      `;
      
      resultDetails.innerHTML = `
        <p><strong>Услуга:</strong> ${description}</p>
        <p><strong>Ориентировочная стоимость:</strong> ${totalCost} руб.</p>
      `;
      
      calculationExplanation.innerHTML = explanation;
      costBreakdown.innerHTML = breakdown;
      
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
    
    scuffSizeInput.addEventListener('keypress', function(e) {
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