const mongoose=require('mongoose')
const mongooseConnection=mongoose.connect('mongodb+srv://Himanshu:HZyxVOS17lNJyrlU@firstcluster-bhxab.mongodb.net/postit',{useNewUrlParser:true})
module.exports=mongooseConnection;