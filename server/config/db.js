const mysql = require('mysql');
 
const db = mysql.createPool({
    host: 'localhost3309',
    user: 'root',
    password: '1234'
});
 
module.exports = db;

/*
DB 연결 안 되었고 3306이였는지 3309였는지 기억이 안남
*/