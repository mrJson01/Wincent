const mysql = require('../mysql/mysql-modules.js');
const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');

exports.home = (req,res)=>{
    res.render('home');
}

exports.register = (req,res)=>{
    res.render('register');
}

exports.registrationResult = (req,res,next)=>{
    
    
    
    // SHOW THE MISTAKES
    let errors = validationResult(req);    
    console.log(errors.array());
    
    if(errors.isEmpty()) next();
    else {
        req.flash('fail',errors.array());
        res.redirect('/register');
    }
};

exports.registrationEnd = (req,res)=>{
    
    let queue = "";
    let values = "";
    
    let hash = bcrypt.hashSync(req.body.password,10);
    req.body.password = hash;
    
    for(let key in req.body){
        if(key!=="password-verify"){
            queue+=",`"+key+"` ";
            values+=` ,"${req.body[key]}" `;
        }
    }
    
    mysql.RegistrationSaveData(queue,values).then(msg =>{
        req.flash('success',[{title:'Success',msg:msg}]);
        res.redirect('/');
    }).catch(error=>{
        
        // HANDLING ERROR PROPERLY WILL HAVE TO BE ADDED !!!!!!!!!!!!!!!!
        
        req.flash('error',error);
        res.redirect('/register');
    });
    
};