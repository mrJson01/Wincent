const {checkSchema} = require('express-validator');


exports.register = checkSchema({
    firstname:{
        in:['body'],
        isAlpha:{
            errorMessage:'Firstname may contain only letters'
        }
    },
    lastname:{
        in:['body'],
        isAlpha:{
            errorMessage:'Lastname may contain only letters'
        }
    },
    email:{
        in:['body'],
        isEmail:{
            errorMessage:'Not valid format of email'
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
            }
        }
            
    },
    
    'date-of-birth':{
        isDate:true,
        errorMessage:'Given date is incorrect. Try again'
    }
    
});