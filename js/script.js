document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.product-card button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            window.location.href = `detalle_producto.html?id=${productId}`;
        });
    });
});
