const db = require('../models');

module.exports = {
    getEmployees: getEmployees = async(req, res) => {
        try {
            let employees = await db.Employee.findAll();
            res.status(200).json(employees);
        } catch (error) {
            res.status(404).json({message: error.message});
            console.log(error.message)
        }
    },

    getOne: getOne = async(req,res)=>{
        const {id: id} = req.params;
        try {
            const employee = await db.Employee.findByPk(id, {
                logging: false,
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
                first_name: newEmployeeData.first_name,
                last_name: newEmployeeData.last_name,
                gender: newEmployeeData.gender,
                hire_date: newEmployeeData.hire_date,
                birth_date: newEmployeeData.hire_date,
                Salaries: []
            }, 
            {   
                logging: false,
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
                const deletedEmployee = await db.Employee.destroy({logging: false, where:{
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
                        logging: false,
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