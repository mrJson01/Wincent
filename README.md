# The API of (to-be) Wincent.com

## Wincent.com v0.1 (Initiate)

Whole net API will be running on **express js** module , **pug** will be the view engine for express. <br/>
**Nodemon** for faster veryfing the work . This version will includ only the home page with universal <br/>
top-menu and footer. Implemented enviromental variables. <br/>

### Initialisation modules 

* express
* body-parser
* cookie-parser
* nodemon
* pug
* dotenv

## Development branch

**added modules**
* express-session
* express-validator
* express-flash
* mysql
* JEST
* bcrypt

I used JEST to test mysql based seraching for a email in a database to check if given email <br/>
is already using by someone else. Express-session needed to use epxress-flash by will also come handy <br/>
when I will be creating log in to the site. After checking a data sent to server they are inserted to table <br/>
users in a MYSQL database. In the end user is redirected to the home site with suitable message. <br/>
Names of a columns in table in none quote .<br/> 

What was made untill now will be merged with master as v0.2(Registaration). <Br/>

**To do:** <br/>
* mixins seperate folder to stash reusable elements <br/>
* Error handling <br/>
* Fix footer.pug

