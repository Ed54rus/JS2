const products = [
    {id: 14, title: 'Ноутбук', price: 72000},
    {id: 256, title: 'Монитор', price: 34000},
    {id: 66, title: 'Наушники', price: 6000},
    {id: 789, title: 'Веб камера', price: 2000},
    {id: 456, title: 'Мышь', price: 5000}
];

const renderProduct = (product, img='https://via.placeholder.com/200x150') => {
    return `<div class="product-item">
                <img src="${img}" alt="Product picture" width="200" height="150">
                <div class="product-item__desc">
                    <h3>${product.title}</h3>
                    <p>${product.price} руб.</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)).join('');
    document.querySelector('.products').insertAdjacentHTML('beforeend', productsList);
}
renderPage(products);