class ProductsList {
	constructor(container = '.products') {
		this.container = container;
		this.goods = [];
		this.allProducts = [];
		this._fetchProducts();
	}
	
	_fetchProducts() {
		this.goods = [
			{id: 14, title: 'Ноутбук', price: 72000},
			{id: 256, title: 'Монитор', price: 34000},
			{id: 66, title: 'Наушники', price: 6000},
			{id: 789, title: 'Веб камера', price: 2000},
			{id: 456, title: 'Мышь', price: 5000},
		]
	}
	
	render() {
		const block = document.querySelector(this.container);
		for (let product of this.goods) {
			const prodObj = new ProductItem(product);
			this.allProducts.push(prodObj);
			block.insertAdjacentHTML('beforeend', prodObj.render());
		}
	}
}

class ProductItem {
	constructor(product, img = 'https://via.placeholder.com/200x150') {
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.img = img;
	}
	
	render() {
		return `<div class="product-item" data-id="${this.id}">
                    <img src="${this.img}" alt="Product picture" width="200" height="150">
                    <div class="product-item__desc">
                       <h3>${this.title}</h3>
                       <p>${this.price} руб.</p>
                       <button class="buy-btn">Купить</button>
                    </div>
                 </div>`
	}
}

let list = new ProductsList();
list.render();
