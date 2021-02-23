var express = require('express');
var router = express.Router();
var UserController = require('../controllers/userController')

/* GET users listing. */
router.get('/', UserController.findAll);


/* GET users listing. */
router.get('/testeDB', function(req, res, next) {
  
});

  /*Rota*/
  router.get('/cadastroUsers',UserController.cadastro2);






module.exports = router;
