const userRepository = require('../repositories/usersRepository')


module.exports = {

    fyndAll(){
        console.log('Entrou na Services')
       let users = userRepository.findAll();
       console.log('SERVICE ' + users)
       return users;
    },

    insertUsers(){
        console.log('Entrou na Services')
        let users2 = 
            {
                nome:'TESTE 1',
                email: 'teste@teste.com',
                cpf: '21958651800',
                cel: 11911111111
            };
        
       let users = userRepository.insertUsers(users2);
       console.log('SERVICE ' + users)
       return users;
    }
}