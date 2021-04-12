const cadastroUsuarioService = require('../services/cadastroUsuario')

module.exports = {

    findAll(req,res,next){
        console.log('Entrou na Controller')
        res.send(cadastroUsuarioService.fyndAll())
    },

    cadastro(req,res,next){
        res.render('cadastroUsuario.ejs')
    },

    cadastro2(req,res,next){
        res.send(cadastroUsuarioService.insertUsers)
    }
}