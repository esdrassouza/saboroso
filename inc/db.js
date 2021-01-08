const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:    'localhost' ,
    user:    'esdras',
    password:'1234',
    database:'saboroso',
});

module.exports = connection;