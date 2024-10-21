const addToCartButtons = document.querySelectorAll('.add-to-cart');
const resetButton = document.querySelector('.place-order');
const productCount = document.querySelector('.cart-count');
let count = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        productCount.textContent = count;
    });
});
resetButton.addEventListener('click', () => {
    count = 0;
    productCount.textContent = count;
});