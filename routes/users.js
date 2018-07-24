var express = require('express');
var router = express.Router();
var User = require('../models/user')

// Register
router.get('/register', function (req, res) {
  res.render('register')
});

// Login
router.get('/login', function (req, res) {
  res.render('login')
})

module.exports = router;
