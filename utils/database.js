const mongoose=require('mongoose')
const mongooseConnection=mongoose.connect('mongodb+srv://Himanshu:HZyxVOS17lNJyrlU@firstcluster-bhxab.mongodb.net/postit?retryWrites=true',{useNewUrlParser:true})
module.exports=mongooseConnection;