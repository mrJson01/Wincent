const Pool = require('./mysql-config.js');


//      CHECK IF EMAIL IS IN DATABASE
function checkEmail(email){
    return new Promise((resolve,reject)=>{
        Pool.getConnection((errorA,connection)=>{
            
            if(!errorA){
                
                connection.query(`SELECT id FROM users WHERE email="${email}"`,(errorB,result,fields)=>{
                   
                    let amount = Object.keys(result).length;
                    
                    if(amount) reject('Given email is already used');
                    else resolve(true);
                    
                    connection.release();
                });
                
                
            }else{
                
            }
        }); 
    });
}

exports.checkEmail = checkEmail;

function RegistrationSaveData(queue,values){
    
    return new Promise((resolve,reject)=>{
        
        Pool.getConnection((error,connection)=>{

            connection.query(`INSERT INTO users (id${queue},dateOfRegister) VALUES(null${values},null)`,(err,result,field)=>{

                if(!err) resolve('Registration ended successfuly');
                else reject(err);
                
                connection.release();

            });
        });
        
        
    });
    
    
}

exports.RegistrationSaveData = RegistrationSaveData; 

