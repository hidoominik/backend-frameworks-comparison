import Employee from '../models/employee.js';
import db from '../models/index.js';

export const getEmployees = async(req, res) => {
    try {
        let employees = await Employee.findAll({});
        // res.json({message: 'Success'});
        res.status(200).json(employees);
    } catch (error) {
        res.status(404).json({message: error.message});
        console.log(error.message)
    }
}