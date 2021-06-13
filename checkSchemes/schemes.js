const {checkSchema} = require('express-validator');
const mysql = require('../mysql/mysql-modules.js');


exports.register = checkSchema({
    firstname:{
        in:['body'],
        isAlpha:{
            errorMessage:'Firstname may contain only letters'
        },
        isLength:{
            errorMessage:'First name may contain 3 to 14 letters',
            options:{
                min:3,
                max:14
            }
        }
    },
    lastname:{
        in:['body'],
        isAlpha:{
            errorMessage:'Lastname may contain only letters'
        },
        isLength:{
            errorMessage:'Last name may contain 3 to 14 letters',
            options:{
                min:3,
                max:14
            }
        }
    },
    email:{
        in:['body'],
        isEmail:{
            errorMessage:'Not valid format of email'
        },
        custom:{
            options:mysql.checkEmail
        }
        
    },
    
    password:{
        in:'body',
        matches:{
            options:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
            errorMessage:'Password should contain at least one lowercase letter , one uppercase letter and one number and be 8 letters long'
        }
        
    },
    
    'password-verify':{
        in:'body',
        custom:{
            options:(value,{req})=>{
                
                if(value!==req.body.password)throw new Error('Given password does not match the first one');
                
                //     IMPORTANT
                return true;
            }
        }
            
    },
    
    'date-of-birth':{
        isDate:true,
        errorMessage:'Given date is incorrect. Try again'
    }
    
});