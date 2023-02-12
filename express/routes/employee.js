// import express from 'express';
// import {getEmployees } from '../controllers/employees.js'

const express = require('express');
const employees = require('../controllers/employees.js')
const router = express.Router();

router.get('/fetchAll', employees.getEmployees);
router.get('/fetchInRange/:idFrom/:idTo', employees.getEmployeesInRange);
router.get('/:id', employees.getOne);
router.post('/create', employees.createOne);
router.delete('/delete/:id', employees.deleteOne);
module.exports = router;