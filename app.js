// IMPORTING THE MODULES  !!!!
require('dotenv').config({path:'.env'});
const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const path = require('path');
const Router = require('./router/index.js');




const app = express();

//BASIC STUFF !!!!

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
app.use(express.static(path.join(__dirname,"public")));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/',Router);

module.exports = app;