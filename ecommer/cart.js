function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProductIndex = cart.findIndex(item => item.name === productName);

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity++;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            const product = button.parentElement;
            const productName = product.querySelector('h3').textContent;
            const price = parseFloat(product.querySelector('.price').textContent.replace('RS ', ''));

            addToCart(productName, price);

            alert('Item added to cart!');
        });
    });
});
