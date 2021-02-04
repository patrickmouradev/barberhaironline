const userServices = require('../services/userServices')

module.exports = {

    findAll(req,res,next){
        console.log('Entrou na Controller')
        res.send(userServices.fyndAll())
    },

    cadastro(req,res,next){
        res.render('cadastroUsuario.ejs')
    }
}