require('dotenv').config({path:'\.env'});

const mysql = require('mysql');

var Pool = mysql.createPool({
    connectionLimit: process.env.MYSQL_LIMIT,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});


module.exports = Pool;