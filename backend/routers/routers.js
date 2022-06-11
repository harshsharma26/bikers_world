const express=require('express');
const router=express.Router();
const form=require('../models/form.js');
//const login=require('../models/login.js');
var ObjectId = require('mongodb').ObjectID;

//create form api

router.post('/',(req,res,next)=>
{
    let Form= new form({
        firstName:req.body.firstName,
        contact:req.body.contact,
        email:req.body.email, 
        password:req.body.password
    });
     Form.save((err,doc)=>{
         if(err){
             console.log('the data have any error'+err);
         }
         else
        {

            res.send(doc);
        }
     });
})
router.get('/',(req,res,next)=>{
   form.find((err,doc)=>{
       if(err){
           console.log('the data have any error'+err);
       }
       else{
           res.send(doc);
       }
   });
});





















//apis

// // router.post('/',(req,res)=>{
// //     let log1=new login({
// //         firstName:req.body.firstName,
// //         contact:req.body.contact,
// //         email:req.body.email,
// //         password:req.body.password
// //     });
// //     log1.save((err,doc)=>{
// //         if(err)
// //         {
// //             console.log('the data have any error'+err);
// //         }
// //         else
// //         {
// //             res.send(doc);
// //         }
// //     });
// })
module.exports = router;