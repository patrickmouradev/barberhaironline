var express = require('express');
var router = express.Router();
var CadastroSalaoController = require('../controllers/cadastroSalaoController')

router.get('/',CadastroSalaoController.cadastro)
router.post('save',CadastroSalaoController.save)


module.exports = router;