---
layout: base.njk
title: Калькулятор стоимости ремонта
description: Рассчитайте стоимость ремонта скола или трещины в лобовом стекле онлайн
keywords: калькулятор, стоимость, ремонт, скол, трещина, лобовое стекло
---

# Калькулятор стоимости ремонта

<div id="calculator-container">
  <div class="info-block">
    <p><strong>Важно:</strong> Представленная стоимость является ориентировочной. Точная стоимость будет определена после осмотра повреждения нашим специалистом.</p>
  </div>
  
  <form id="calculator-form">
    <div class="form-group">
      <label for="damage-type">Тип повреждения:</label>
      <select id="damage-type" name="damage-type" required>
        <option value="">Выберите тип повреждения</option>
        <option value="scuff">Скол</option>
        <option value="crack-stop">Остановка трещины</option>
        <option value="crack-fill">Заливка трещины</option>
      </select>
    </div>
    
    <div class="form-group" id="crack-length-group" style="display: none;">
      <label for="crack-length">Длина трещины (см):</label>
      <input type="number" id="crack-length" name="crack-length" min="1" max="200" step="0.5">
    </div>
    
    <button type="button" id="calculate-btn" class="btn-primary">Рассчитать стоимость</button>
  </form>
  
  <div id="result-container" style="display: none;">
    <h3>Результат расчета:</h3>
    <div id="result-details"></div>
    <button id="book-service-btn" class="btn-primary">Записаться на ремонт</button>
  </div>
  
  <div class="info-section">
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
  #calculator-container {
    max-width: 700px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  select, input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
  
  #result-container {
    margin-top: 20px;
    padding: 20px;
    background-color: #e8f5e9;
    border-radius: 8px;
    border: 1px solid #4caf50;
  }
  
  #result-details {
    margin: 15px 0;
    font-size: 18px;
    font-weight: bold;
  }
  
  .info-section {
    margin-top: 30px;
    padding: 20px;
    background-color: #e3f2fd;
    border-radius: 8px;
  }
  
  .info-section h3 {
    margin-top: 0;
  }
  
  .info-section ul {
    padding-left: 20px;
  }
  
  .info-section li {
    margin-bottom: 10px;
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const damageTypeSelect = document.getElementById('damage-type');
    const crackLengthGroup = document.getElementById('crack-length-group');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultContainer = document.getElementById('result-container');
    const resultDetails = document.getElementById('result-details');
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
        return;
      }
      
      if (damageType === 'crack-fill' && (!crackLength || crackLength <= 0)) {
        alert('Пожалуйста, введите длину трещины');
        return;
      }
      
      let cost = 0;
      let description = '';
      
      switch(damageType) {
        case 'scuff':
          cost = 1500;
          description = 'Ремонт скола';
          break;
        case 'crack-stop':
          cost = 1500;
          description = 'Остановка трещины';
          break;
        case 'crack-fill':
          cost = crackLength * 50;
          description = `Заливка трещины (${crackLength} см)`;
          break;
      }
      
      resultDetails.innerHTML = `
        <p><strong>Услуга:</strong> ${description}</p>
        <p><strong>Ориентировочная стоимость:</strong> ${cost} руб.</p>
        <p><small>Точная стоимость будет определена после осмотра повреждения нашим специалистом.</small></p>
      `;
      
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
  });
</script>