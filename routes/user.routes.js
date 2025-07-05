import express from 'express';
import { authenticateUser } from '../middleware/authenticate.js';
import {
  showCurrentUser,
  updateUserInfo,
  updateUserPassword,
} from '../controllers/user.controller.js';
const router = express.Router();

router.route('/showMe').get([authenticateUser], showCurrentUser);

router.route('/updateInfo').patch([authenticateUser], updateUserInfo);
router.route('/updatePassword').patch([authenticateUser], updateUserPassword);

export default router;
