async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");

    if(process.env.NODE_ENV == 'dev') {
        //const connection = await mysql.createConnection("mysql://root:140908@localhost:3306/barberhairdb");
        const connection = await mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '140908',
            database : 'barberhairdb'
        });
        console.log("Conectou no MySQLdev!");
        global.connection = connection;
        return connection;
    }

    if(process.env.NODE_ENV == 'prod') {
        const connection = await mysql.createConnection("mysql://root:140908@localhost:3306/barberhairdb");
        //const connection = await mysql.createConnection({
        //    host     : 'localhost:3306',
        //    user     : 'root',
        //    password : '140908',
        //    database : 'barberhairdb'
        //});
        console.log("Conectou no MySQL - proc!");
        global.connection = connection;
        return connection;
    }
  
   
    
    
}

module.exports = {connect}

//const connection = mysql.createConnection({
//    host     : 'localhost',
//    user     : 'root',
//    password : '140908',
//    database : 'barberhairdb'
//  });


  
  //connection.connect(function(err) {
  //  if (err) throw err;
  //  console.log("Connected!");
  //});