const express = require('express');
const AuthController = require('../controllers/auth_controller');

const router = express.Router();

router.use('/auth', AuthController);

module.exports = router;
