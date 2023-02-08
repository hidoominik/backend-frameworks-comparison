import mysql from 'mysql2';

const pool = mysql.createPool({
    host:'127.0.0.1', //localhost
    user:'root',
    password:'root',
    database: 'employees' //name of database
}).promise();

const result = await pool.query("SELECT * FROM employees")