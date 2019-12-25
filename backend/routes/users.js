const express = require('express');
const router = express.Router();
const User = require('../models/user')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    UserList = await User.find({})
    res.json(UserList)
  } catch (err) {
    res.json(err)
  }
});

module.exports = router;
