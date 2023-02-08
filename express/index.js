import mysql from 'mysql2';
import dotenv from 'dotenv'

dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST, //localhost
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE//name of database
}).promise();

export async function getEmployees(){
    const [rows] = await pool.query("SELECT * FROM employees");

return rows;
}

export async function getEmployee(id){
    const [rows] = await pool.query(`SELECT * FROM employees WHERE emp_no = ? `, [id]);
    return rows[0];
}

export async function createEmployee(birth_date, first_name, last_name, gender, hire_date){
    const [result] = await pool.query(`INSERT INTO employees (birth_date, first_name, last_name, gender, hire_date) VALUES (?, ?, ?, ?, ?)`, [birth_date, first_name, last_name, gender, hire_date]);
    return result.insertId;
}

//----Get all employees----
// const employees = await getEmployees();
// console.log(employees);


//----Get employee by id----
const employee = await getEmployee(10099);
console.log(employee);


//----Create employee----
// const result = await createEmployee('1999-05-24T23:00:00.000Z', 'Andrzej', 'Matejko', 'M', '2010-05-24T23:00:00.000Z');
// console.log(result);
// const employee = await getEmployee(result);
// console.log(employee);
