var express = require('express');
var router = express.Router();
var User = require('../models/user')

// Register
router.get('/register', function (req, res, next) {
  res.render('register')
});

router.get('/', (req, res, next) => {
  User.find({}, (err, users) => {
    res.send(users)
  })
})
// Login
router.get('/login', function (req, res) {
  res.render('login')
})

module.exports = router;
