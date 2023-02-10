// import express from 'express';
// import {getEmployees } from '../controllers/employees.js'

const express = require('express');
const getEmployees = require('../controllers/employees.js')

const router = express.Router();

router.get('/', getEmployees);

module.exports = router;