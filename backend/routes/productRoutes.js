import express, { Route } from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js';

//fetch all products
//@route GET /api/products
router.route('/').get(getProducts);

//fetch  product
//@route GET /api/products/:id
router.route('/:id').get(getProductById);

export default router;
