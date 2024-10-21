const addToCartButtons = document.querySelectorAll('.add-to-cart');

const productCount = document.querySelector('.cart-count');
let count = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        productCount.textContent = count;
    });
});
