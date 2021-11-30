const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express= require('express');
const app= express();

dotenv.config({path: './config.env'});

require('./db/conn');

app.use(express.json());

//const User = require('./model/userSchema');
const PORT = process.env.PORT;
//link the router files to make route easy
app.use(require('./router/auth'));




//MiddleWare
const middleware=(req,res,next)=>{
console.log(`how are you middleware`);
next();
}




//app.get('/',(req,res) =>{
 //   res.send(`Hello Server with app js`);
//});

app.get('/about',middleware,(req,res) =>{
    res.send(`Hello My About Page`);
});

app.get('/contact',(req,res) =>{
    res.send(`Hello My Contact Page`);
});

app.get('/signin',(req,res) =>{
    res.send(`Hello My signin Page`);
});
 

app.get('/signup',(req,res) =>{
    res.send(`Hello My signup Page`);
});
 
 
app.listen(PORT,()=>{
    console.log(`server is working at port no ${PORT}`);
});