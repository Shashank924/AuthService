const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');
const { authRequestMiddleware } = require('../../middlewares/index');

router.post('/signup' , authRequestMiddleware.authRequestValidator, userController.create);
router.post('/signIn' , authRequestMiddleware.authRequestValidator, userController.signIn);
router.get('/isAuthenticated' , userController.isAuthenticated);
router.get('/isAdmin' , authRequestMiddleware.isAdminRequestValidator , userController.isAdmin);

module.exports = router;