const cadastroSalaoServices = require('../services/cadastroSalao')

module.exports = {
    cadastro(req,res,next){
        res.render('cadastroSalao');

    },
    
    findAll(req,res,next){
        console.log('Entrou na Controller')
        res.send(userServices.fyndAll())
    },

    save(req,res,next){
        res.render('cadastroSalao.ejs')
    }
}