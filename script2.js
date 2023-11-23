document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.closest('.product-card').getAttribute('data-id');
            addToCart(productId);
        });
    });

    function addToCart(productId) {
        // Implement logic to add the product to the cart
        console.log(`Product ${productId} added to the cart.`);
    }
});
