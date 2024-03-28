const express = require('express');
const { studentView } = require('../controller/studentcontroller');

// Create an expressrouter object 
const router = express.Router();

// Handle the student URL with a GET method to use studentView function 
router.get('/student', studentView);

// Exporting the router
module.exports = router;