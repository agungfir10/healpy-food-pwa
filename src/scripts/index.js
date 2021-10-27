import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

let drawer = document.querySelector('#drawer nav');
let menuDrawer = document.querySelector('#menu-drawer');

menuDrawer.addEventListener('click', (e) => {
  drawer.classList.add('open');
});

drawer.addEventListener('click', (e) => {
  e.target.classList.remove('open');
});

let html = '';
let foods = document.getElementById('foods');
fetch('/data/data.json')
  .then((response) => response.json())
  .then((data) => {
    let restaurants = data.restaurants;
    restaurants.forEach((restaurant) => {
      html += `<article class="food-item">
      <img class="food-item__thumbnail"
          src="${restaurant.pictureId}" alt="${restaurant.name}">
      <span class="food-item__address">${restaurant.city}</span>
      <div class="food-item__content">
          <p class="food-item__rate"><span class="material-icons">grade</span>${restaurant.rating}</p>
          <h3 class="food-item__title"><a href="/${restaurant.id}">${restaurant.name}</a></h3>
          <p class="food-item__description">${restaurant.description}</p>
      </div>
    </article>`;
    });
    foods.innerHTML = html;
  });
