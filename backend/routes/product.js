import express from 'express';

import productControllers from '../controllers/product.js';
import verifyToken from '../middleware/verifyToken.js';

const productRoutes = express.Router();

productRoutes.get('/', productControllers.getProducts);
productRoutes.get('/cat/:category', productControllers.getProductByCategory);
productRoutes.post('/', verifyToken, productControllers.addProducts);
productRoutes.put('/:id', verifyToken, productControllers.updateProducts);
productRoutes.delete('/:id', verifyToken, productControllers.deleteProducts);

export default productRoutes;
