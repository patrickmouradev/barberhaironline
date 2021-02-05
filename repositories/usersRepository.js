const connection = require('../configuration/configDB')

async function findAll(){
    const conn = await connection.connect();
    const [rows] = await conn.query('SELECT * FROM USER;');
    console.log(rows[0].TextRow)
    let user = {
        'id' : 'Teste'
    }
    console.log(user)
    return rows;
}

async function insertUsers(user){
    const conn = await connection.connect();
    const sql = 'INSERT INTO user(name,email,cpf,cel) VALUES (?,?,?,?);';
    const values = [user.nome,user.email,user.cpf,user.cel];
    return await conn.query(sql, values);
}
 
module.exports = {findAll,insertUsers}