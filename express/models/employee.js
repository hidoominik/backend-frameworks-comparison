
const models = require('./');

module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define("Employee",{
        emp_no:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        birth_date:{
            type: DataTypes.DATEONLY,
        },
        first_name:{
            type: DataTypes.TEXT,
        },
        last_name:{
            type: DataTypes.TEXT,
        },
        gender:{
            type: DataTypes.CHAR,
        },
        hire_date:{
            type: DataTypes.DATEONLY,
        },
    },{
        timestamps: false
    });

    Employee.associate = (models) => {
        Employee.hasMany(models.Salary, {
            foreignKey: 'emp_no',
        })
    }

    return Employee;
};