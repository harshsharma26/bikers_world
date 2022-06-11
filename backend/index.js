const express = require('express');
const bodyParser=require('body-parser');
const cors=require('cors');//cors use for angular api data sending
const Mongoose=require('./db.js');
const router=require('./routers/routers.js');
const app=express(); //make a app
app.use(bodyParser.json()); //bodyParser help to json data move in api
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next(); 
});
// app.use(core({origin:'http://localhost:4200/'}));
app.listen(3060,()=>console.log("server start on port:3060"));

//app.use('/login',routers);
app.use('/form',router)