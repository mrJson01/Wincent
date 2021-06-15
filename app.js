// IMPORTING THE MODULES  !!!!
require('dotenv').config({path:'.env'});
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');
const path = require('path');
const Router = require('./router/index.js');
const errorHandler = require('./error.js');




const app = express();

//BASIC STUFF !!!!

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
app.use(express.static(path.join(__dirname,"public")));


app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//SESSION
app.use(session({
    secret:process.env.SESSION_SECRET,
    saveUninitialized:false,
    resave:false
}))
app.use(flash());

app.use('/',Router);


app.use(errorHandler.notFound);
app.use(errorHandler.catchError);

module.exports = app;