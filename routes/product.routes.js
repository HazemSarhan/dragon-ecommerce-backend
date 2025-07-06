import express from 'express';
import {
  createProduct,
  getBestSellingProducts,
  getProductById,
  getAllProducts,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller.js';
import {
  authenticateUser,
  authorizePermissions,
} from '../middleware/authenticate.js';
const router = express.Router();

router
  .route('/')
  .post([authenticateUser, authorizePermissions('ADMIN'), createProduct])
  .get(getAllProducts);

router.route('/bestSelling').get(getBestSellingProducts);

router
  .route('/:id')
  .get(getProductById)
  .patch([authenticateUser, authorizePermissions('ADMIN'), updateProduct])
  .delete([authenticateUser, authorizePermissions('ADMIN'), deleteProduct]);

export default router;
