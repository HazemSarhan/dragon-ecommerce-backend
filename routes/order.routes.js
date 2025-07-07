import express from 'express';
import {
  authenticateUser,
  authorizePermissions,
} from '../middleware/authenticate.js';
import {
  createOrder,
  getMyOrders,
  handleSuccess,
} from '../controllers/order.controller.js';
const router = express.Router();

router
  .route('/')
  .post([authenticateUser], createOrder)
  .get([authenticateUser], getMyOrders);
router.route('/success').get([authenticateUser], handleSuccess);

export default router;
