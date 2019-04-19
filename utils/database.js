const mongoose=require('mongoose')
const mongooseConnection=mongoose.connect('mongodb://localhost:27017/shopIt',{useNewUrlParser:true})
module.exports=mongooseConnection;