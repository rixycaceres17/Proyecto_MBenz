const redColor = document.querySelector('.red-btn');
const cartButton = document.getElementById('cartButton');
const imageCard = document.querySelector(',image-card');

redColor,addEventListener('click', function() {
    cartButton.style.backgroundColor = 'red';
    imageCard.style.backgroundImage = 'url("red-benz.webp")';
});