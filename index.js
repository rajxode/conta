
// express
const express=require('express');

// for file path
const path=require('path');

// port on which the server is running
const port=8000;

// importing mongoose file form config folder
const database=require('./config/mongoose');


const app=express();

// middlewares 
app.use(express.urlencoded());           // to decode the encoded data from user 
app.use(express.static('assets'));               // to locate path of static files like css and javascript


// importing the routes
app.use('/',require('./routes'));

// settting EJS
app.set('view engine','ejs');
// defining path of result file with respect to current file
app.set('views',path.join(__dirname,'views'));


// static folder
app.use(express.static('/assets'));


// server start
app.listen(port,function(err){
    if(err){
        console.log('error',err);
        return;
    }
    console.log(`server is running at port : ${port}`);
    return;
})