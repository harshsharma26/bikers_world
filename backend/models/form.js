const Mongoose=require("mongoose")
const signinn=Mongoose.model('signinn',
{
    firstName:{type:String},
    contact:{type:String},
    email:{type:String},
    password:{type:String}
});
module.exports=signinn;