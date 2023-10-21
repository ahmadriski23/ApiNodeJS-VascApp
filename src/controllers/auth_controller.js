const express = require('express');
const AuthService = require('../services/auth_service');

const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const result = AuthService.login(email, password);

  if (result.error) {
    return res.status(401).json({ message: result.error });
  } else {
    return res.json({ token: result.token });
  }
});

module.exports = router;
