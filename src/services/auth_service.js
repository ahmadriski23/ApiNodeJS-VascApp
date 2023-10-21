const jwt = require('jsonwebtoken');
const User = require('../models/user_model');

const secretKey = 'thisismysecrekey219328onenumber';

const AuthService = {
  login: (email, password) => {
    if (!email || !password) {
      return { error: 'Missing Email or Password' };
    }

    // * validasi email and password
    if (email === 'eve.holt@reqres.in' && password === 'cityslicka') {
      // * menghasikan token
      const token = jwt.sign({ email }, secretKey);
      return { token };
    } else {
      return { error: 'Unauthorized' };
    }
  },
};

module.exports = AuthService;
