const mysql = require('./mysql-modules.js');

test('Checking if the email already exists in a database',()=>{
    return expect(mysql.checkEmail('piotr-rkos@wp.pl')).resolves.toBeTruthy();
});

test('Test inserting data to table in database',()=>{
    return expect(mysql.RegistrationSaveData(',firstname,lastname,email,`date-of-birth`',',"Alex","Taylor","tylor1@gmail.com","1988-12-22"')).resolves.toBe('Registration ended successfuly');
});