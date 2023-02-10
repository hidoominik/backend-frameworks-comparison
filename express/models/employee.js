
export default (sequelize, DataTypes) => {
    const Employee = sequelize.define("Employee",{
        emp_no:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        birth_date:{
            type: DataTypes.DATE,
        },
        first_name:{
            type: DataTypes.VARCHAR,
        },
        last_name:{
            type: DataTypes.VARCHAR,
        },
        gender:{
            type: DataTypes.ENUM,
        },
        hire_date:{
            type: DataTypes.DATE,
        },
    });
    return Employee;
};