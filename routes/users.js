var express = require('express');
var router = express.Router();
var cadastroUsuarioController = require('../controllers/cadastroUsuarioController')


/* GET home page. */
router.get('/create',function(req,res,next){
  res.render('cadastroUsuario.ejs');
  
});

router.get('/login',function(req,res,next){
  res.render('login.ejs');
  
});


/* GET users listing. */
router.get('/testeDB', function(req, res, next) {
  
});

  /*Rota*/
  router.get('/cadastroUsers',cadastroUsuarioController.cadastro2);






module.exports = router;
