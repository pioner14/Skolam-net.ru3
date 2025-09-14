---
layout: base.njk
title: Отзывы клиентов
description: Отзывы клиентов о качестве ремонта сколов и трещин в лобовых автостеклах. Реальные истории довольных клиентов.
keywords: химки, отзывы, клиенты, ремонт стекол, сколы, трещины, лобовое стекло
---

# Отзывы клиентов

<div class="reviews-container">
  <div class="info-block">
    <p>Здесь представлены реальные отзывы наших клиентов. Если вы уже пользовались нашими услугами, поделитесь своим опытом!</p>
  </div>
  
  <div class="review-form-container">
    <h3>Оставьте свой отзыв</h3>
    <form id="review-form" class="review-form">
      <div class="form-group">
        <label for="reviewer-name">Ваше имя:</label>
        <input type="text" id="reviewer-name" name="reviewer-name" class="form-control" required>
      </div>
      
      <div class="form-group">
        <label for="review-rating">Оценка:</label>
        <div class="rating-stars">
          <input type="radio" id="star5" name="review-rating" value="5" required>
          <label for="star5" class="star">★</label>
          <input type="radio" id="star4" name="review-rating" value="4">
          <label for="star4" class="star">★</label>
          <input type="radio" id="star3" name="review-rating" value="3">
          <label for="star3" class="star">★</label>
          <input type="radio" id="star2" name="review-rating" value="2">
          <label for="star2" class="star">★</label>
          <input type="radio" id="star1" name="review-rating" value="1">
          <label for="star1" class="star">★</label>
        </div>
      </div>
      
      <div class="form-group">
        <label for="review-text">Ваш отзыв:</label>
        <textarea id="review-text" name="review-text" class="form-control" rows="5" required></textarea>
      </div>
      
      <div class="form-group">
        <label for="review-date">Дата оказания услуги (опционально):</label>
        <input type="date" id="review-date" name="review-date" class="form-control">
      </div>
      
      <button type="submit" class="btn-primary">Отправить отзыв</button>
    </form>
  </div>
  
  <div class="reviews-list-container">
    <h3>Отзывы наших клиентов</h3>
    <div id="reviews-list" class="reviews-list">
      <!-- Отзывы будут загружаться сюда -->
      <div class="review-item">
        <div class="review-header">
          <span class="reviewer-name">Александр</span>
          <div class="review-stars">
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
          </div>
        </div>
        <div class="review-date">15 июня 2023</div>
        <div class="review-text">
          Отличный сервис! Ребята приехали в течение часа, как и обещали. Ремонт скола занял около 40 минут. 
          Место ремонта практически незаметно. Рекомендую!
        </div>
      </div>
      
      <div class="review-item">
        <div class="review-header">
          <span class="reviewer-name">Мария</span>
          <div class="review-stars">
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
          </div>
        </div>
        <div class="review-date">3 мая 2023</div>
        <div class="review-text">
          Очень довольна качеством ремонта. Мастер был вежлив и аккуратен. Ремонт трещины обошелся 
          значительно дешевле, чем замена стекла. Спасибо!
        </div>
      </div>
      
      <div class="review-item">
        <div class="review-header">
          <span class="reviewer-name">Дмитрий</span>
          <div class="review-stars">
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star">★</span>
          </div>
        </div>
        <div class="review-date">20 апреля 2023</div>
        <div class="review-text">
          Хорошее качество работы, но немного задержались с выездом. В остальном - всё отлично. 
          Место ремонта практически незаметно.
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .reviews-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .review-form-container {
    background-color: #f8f8f8;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 30px;
  }
  
  .reviews-list-container {
    background-color: #f8f8f8;
    padding: 20px;
    border-radius: 8px;
  }
  
  .review-form .form-group {
    margin-bottom: 20px;
  }
  
  .review-form label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #333333;
  }
  
  .rating-stars {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
  
  .rating-stars input[type="radio"] {
    display: none;
  }
  
  .rating-stars .star {
    font-size: 30px;
    color: #ddd;
    cursor: pointer;
    transition: color 0.2s;
  }
  
  .rating-stars .star:hover,
  .rating-stars .star:hover ~ .star,
  .rating-stars input[type="radio"]:checked ~ .star {
    color: #feb072;
  }
  
  .rating-stars input[type="radio"]:checked + .star,
  .rating-stars input[type="radio"]:checked + .star ~ .star {
    color: #feb072;
  }
  
  .review-item {
    background-color: #ffffff;
    padding: 15px;
    border-radius: 4px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .review-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .reviewer-name {
    font-weight: bold;
    font-size: 18px;
    color: #730800;
  }
  
  .review-stars .star {
    font-size: 20px;
    color: #ddd;
  }
  
  .review-stars .star.filled {
    color: #feb072;
  }
  
  .review-date {
    font-size: 14px;
    color: #666666;
    margin-bottom: 10px;
  }
  
  .review-text {
    color: #333333;
    line-height: 1.6;
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('review-form');
    
    reviewForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Получаем значения полей формы
      const reviewerName = document.getElementById('reviewer-name').value;
      const reviewRating = document.querySelector('input[name="review-rating"]:checked').value;
      const reviewText = document.getElementById('review-text').value;
      const reviewDate = document.getElementById('review-date').value;
      
      // Показываем сообщение об успехе
      alert(`Спасибо за ваш отзыв, ${reviewerName}! Ваш отзыв будет добавлен после модерации.`);
      
      // Очищаем форму
      reviewForm.reset();
    });
  });
</script>