// import Employee from '../models/employee.js';
// import db from '../models/index.js';
const db = require('../models');

module.exports = {
    getEmployees: getEmployees = async(req, res) => {
    try {
        let employees = await db.Employee.findAll();
        // res.json({message: 'Success'});
        res.status(200).json(employees);
    } catch (error) {
        res.status(404).json({message: error.message});
        console.log(error.message)
    }
},

    getEmployeesInRange: getEmployeesInRange = async(req, res) =>{
    const {idFrom: idFrom, idTo: idTo} = req.params;
    try {
        if(idFrom < idTo){
            const employeeFrom = await db.Employee.findByPk(idFrom);
            const employeeTo = await db.Employee.findByPk(idTo);
            if(!employeeFrom || !employeeTo) res.status(404).json({message: 'Incorrect range!'});
            console.log(idFrom);
            console.log(idTo);
            const range = (start, stop) => Array.from({ length: stop - start + 1 }, (_, i) => start + i);
            console.log(range(idFrom, idTo));
            const employees = await db.Employee.findAll({
                where:{emp_no: range(parseInt(idFrom), parseInt(idTo))}
            })
            res.status(200).json(employees);
        }
        res.status(400).json({message: 'Incorrect range!'});
    } catch (error) {
        
    }

}
}