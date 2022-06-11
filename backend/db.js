const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/signin',(err)=>
{
    if(!err)
    {
        console.log('db connection successfully');
    }
    else
    {
        console.log('error in connection'+err);
    }
})
module.exports=mongoose;