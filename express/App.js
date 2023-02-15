const express = require('express');
const employeeRoutes = require('./routes/employee.js')

const app = express();
const PORT = 8080;

app.use(express.json());

app.use('/employee', employeeRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
 
