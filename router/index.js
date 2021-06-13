const express = require('express');
const controller1 = require('../controllers/controller1.js');
const schemes = require('../checkSchemes/schemes.js');



const {validationResult} = require('express-validator');

const Router = express.Router();

Router.get('/',controller1.home);

Router.get('/register',controller1.register);

Router.post('/register/send',schemes.register,controller1.registrationResult,controller1.registrationEnd);

module.exports = Router;