import express from 'express';
import productControllers from '../controllers/product.js';
const productRoutes = express.Router();

productRoutes.get('/', productControllers.getProducts);
productRoutes.get('/cat/:category', productControllers.getProductByCategory);
productRoutes.post('/', productControllers.addProducts);
productRoutes.put('/:id', productControllers.updateProducts);
productRoutes.delete('/:id', productControllers.deleteProducts);

export default productRoutes;
