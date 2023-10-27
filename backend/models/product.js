import { v4 as newId } from 'uuid';

const products = [
    {
        id: '1',
        category: 'electronic',
        name: 'laptop',
        price: '500',
        img: 'https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg'
    }
];

class Product {
    constructor(category, name, price, img) {
        this.id = newId();
        this.category = category;
        this.name = name;
        this.price = price;
        this.img = img;
    }

    static getProducts = () => {
        return products;
    };

    static getProductByID = (id) => {
        return products.find((product) => product.id === id);
    };

    static getProductByCategory = (category) => {
        return products.filter((product) => product.category === category);
    };

    addProduct = () => {
        products.push(this);
    };
}

export default Product;
