import express from 'express';
// import cors from 'cors';
import employeeRoutes from './routes/employee.js'
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
// app.use(cors());
app.use('/employee', employeeRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
 
