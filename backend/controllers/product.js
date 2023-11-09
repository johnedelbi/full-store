import Product from '../models/product.js';

const productControllers = {
    getProducts: (req, res) => {
        const products = Product.getProducts();
        res.status(200).json({
            products: products
        });
    },
    getProductById: (req, res) => {
        const { id } = req.params;
        const isExist = Product.getProductByID(id);
        if (isExist) {
            res.status(200).json(isExist);
        } else {
            res.status(404).json({
                ok: false,
                message: 'product not found'
            });
        }
    },
    getProductsByCategory: (req, res) => {
        const { category } = req.params;
        const isExist = Product.getProductByCategory(category);
        if (isExist.length > 0) {
            res.status(200).json(isExist);
        } else {
            res.status(404).json({
                ok: false,
                message: `there are no product in ${category} category`
            });
        }
    },
    addProducts: (req, res) => {
        const { category, name, price, img } = req.body;
        if (!category && !name && !price && !img) {
            res.status(402).json({
                ok: false,
                message: 'all fields are required'
            });
        } else {
            const newProduct = new Product(category, name, price, img);
            newProduct.addProduct();
            res.status(201).json({
                ok: true,
                message: `a product with a name: ${name} has been added successfully`
            });
        }
    },
    updateProducts: (req, res) => {
        const { id } = req.params;
        const { category, name, price, img } = req.body;
        if (!category && !name && !price && !img) {
            res.status(402).json({
                ok: false,
                message: 'all fields are required'
            });
        } else {
            const isUpdated = Product.updateProductById(id, {
                category,
                name,
                price,
                img
            });
            if (isUpdated) {
                res.status(204).json({
                    ok: true,
                    message: `product with name ${name} is updated successfully`
                });
            } else {
                res.status(404).json({
                    ok: false,
                    message: 'product not found'
                });
            }
        }
    },
    deleteProducts: (req, res) => {
        const { id } = req.params;
        const isDeleted = Product.deleteProductById(id);
        if (isDeleted) {
            res.status(204).json({
                ok: true,
                message: `product with id ${id} deleted successfully`
            });
        } else {
            res.status(404).json({
                ok: false,
                message: 'there is no product with the same id '
            });
        }
    }
};

export default productControllers;
