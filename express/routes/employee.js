const express = require('express');
const employees = require('../controllers/employees.js')
const router = express.Router();

router.get('/fetchAll', employees.getEmployees);
router.get('/:id', employees.getOne);
router.post('/', employees.createOne);
router.delete('/:id', employees.deleteOne);
router.put('/:id', employees.editOne);
module.exports = router;