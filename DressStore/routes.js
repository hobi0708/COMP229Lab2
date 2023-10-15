const express = require('express');
const router = express.Router();
const productController = require('./controller');

router.get('/api/products', productController.getProducts);
router.get('/api/products/:id', productController.getProductById);
router.post('/api/products', productController.addProduct);
router.put('/api/products/:id', productController.updateProduct);
router.delete('/api/products/:id', productController.deleteProduct);
router.get('/api/categories', productController.getCategories);
router.post('/api/categories', productController.addCategory);

module.exports = router;
