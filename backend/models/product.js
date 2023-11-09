import { v4 as newId } from 'uuid';

const products = [
    {
        id: '1',
        category: 'electronic',
        name: 'laptop',
        price: '500',
        img: 'https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg'
    },
    {
        id: '2',
        category: 'home appliance',
        name: 'sofa',
        price: '950',
        img: 'https://www.fama.es/storage/media/files/shares/actualizacion2023/teseo/BAJA/teseo-sofa-fama-2023-baja-02.webp'
    },
    {
        id: '1',
        category: 'office',
        name: 'desk',
        price: '120',
        img: 'https://www.meubella.nl/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/u/bureau_saturn_-_eiken_-_zwart_-_137_5_cm_meubella.jpeg'
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

    static updateProductById = (id, updateProduct) => {
        const index = products.findIndex((product) => product.id === id);
        if (index === -1) {
            return false;
        } else {
            products[index] = { id, ...updateProduct };
            return true;
        }
    };
    static deleteProductById = (id) => {
        const index = products.findIndex((product) => product.id === id);
        if (index === -1) {
            return false;
        } else {
            products.splice(index, 1);
            return true;
        }
    };

    static getProductByCategory = (category) => {
        return products.filter((product) => product.category === category);
    };

    addProduct = () => {
        products.push(this);
    };
}

export default Product;
