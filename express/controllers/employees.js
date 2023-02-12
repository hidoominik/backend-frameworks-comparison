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
            if(!employeeFrom || !employeeTo){
               res.status(404).json({message: 'Incorrect range!'}); 
            } else {
                const range = (start, stop) => Array.from({ length: stop - start + 1 }, (_, i) => start + i);
                console.log(range(idFrom, idTo));
                const employees = await db.Employee.findAll({
                    where:{emp_no: range(parseInt(idFrom), parseInt(idTo))}
                })
                res.status(200).json(employees);
            }
           
            
        }else{
            res.status(400).json({message: 'Incorrect range!'});
        }
        
    } catch (error) {
        res.status(404).json({message: error.message});
        console.log(error.message)
    }

},
    getOne: getOne = async(req,res)=>{
        const {id: id} = req.params;
        try {
            const employee = await db.Employee.findByPk(id, {
                include: [{
                    model:db.Salary,
                    attributes:['to_date','from_date','salary']
                }]
            });
            if(!employee){
                res.status(404).json({message: 'User not found!'});
            }else{
                 res.status(200).json(employee);
            }

           
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },

    createOne: createOne = async(req, res) =>{
        const newEmployeeData = req.body;
        try {
            const employee = await db.Employee.create({
                emp_no: newEmployeeData.emp_no,
                first_name: newEmployeeData.first_name,
                last_name: newEmployeeData.last_name,
                gender: newEmployeeData.gender,
                hire_date: newEmployeeData.hire_date,
                birth_date: newEmployeeData.hire_date,
                Salaries: []
            }, 
            {
                include: [{
                    model:db.Salary,
                    attributes:['to_date','from_date','salary']
                }]
        });
            
            res.status(200).json(employee);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },

    deleteOne: deleteOne = async(req, res) => {
       const {id: id} = req.params;
       try {
            const employee = await db.Employee.findByPk(id);
            if(!employee){
                res.status(404).json({message: 'User not found!'});
            }else{
                const deletedEmployee = await db.Employee.destroy({where:{
                    emp_no: id,
                }});
                res.status(200).json({message: 'Successfully deleted!'});
            }
       } catch (error) {
            res.status(400).json({message: error.message});
       }
    },

    editOne: editOne = async(req, res) => {
        const {id: id} = req.params;
        const newEmployeeData = req.body;

        try {
            const employee = await db.Employee.findByPk(id);
            if(!employee){
                res.status(404).json({message: 'User not found!'});
            }else{
                await db.Employee.update( 
                    newEmployeeData,
                    {
                        where:{
                            emp_no: id,
                        }
                    }
                );
                const updatedEmployee = await getOne(req, res);
                res.status(200).json(updatedEmployee);
            }
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
    
}