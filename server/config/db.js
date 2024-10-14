const mysql = require('mysql');
 
const db = mysql.createPool({
    host: 'localhost3309',
    user: 'root',
    password: '1234'
});
 
module.exports = db;