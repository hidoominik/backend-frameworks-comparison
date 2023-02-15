const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const express = require('express');
const employeeRoutes = require('./routes/employee.js');

if (cluster.isMaster) {
  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Handle worker exit
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  // Create Express.js app
  const app = express();
  const PORT = 8080;

  app.use(express.json());
  app.use('/employee', employeeRoutes);
    
  // Start server
  app.listen(PORT, () => {
    console.log(`Worker ${process.pid} started. Server is running on port ${PORT}`);
  });
}