const userRepository = require('../repositories/usersRepository')


module.exports = {

    fyndAll(){
        console.log('Entrou na Services')
       let users = userRepository.findAll();
       console.log('SERVICE ' + users)
       return users;
    }
}