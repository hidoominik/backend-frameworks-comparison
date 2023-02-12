const models = require('./');

module.exports = (sequelize, DataTypes) => {
    const Salary = sequelize.define("Salary",{
        emp_no: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        salary:{
            type: DataTypes.INTEGER,
        },
        from_date:{
            type: DataTypes.DATE,
            primaryKey: true
        },
        to_date:{
            type: DataTypes.DATE,
        }
    },{
        timestamps: false
    });

    Salary.associate = (models) =>{
        Salary.belongsTo(models.Employee, {
            foreignKey:'emp_no',
        })
    }
    return Salary;
};