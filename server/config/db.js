const mysql = require('mysql');
 
const db = mysql.createPool({
    host: 'localhost3306',
    user: 'root',
    password: '1234',
    database: 'board'
});
 
module.exports = db;