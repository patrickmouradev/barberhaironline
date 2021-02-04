var express = require('express');
var router = express.Router();
const db = require("../configuration/configDB");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BarberHairOnline' });
});

module.exports = router;
