import express from 'express';
import productControllers from '../controllers/product.js';
const productRoute = express.Router();

productRoute.get('/', productControllers.getProducts);
productRoute.get('/cat/:category', productControllers.getProductByCategory);
productRoute.post('/', productControllers.addProducts);
productRoute.put('/:id', productControllers.updateProducts);
productRoute.delete('/:id', productControllers.deleteProducts);

export default productRoute;
