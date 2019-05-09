const mongoose=require('mongoose')
const mongooseConnection=mongoose.connect('mongodb+srv://Himanshu:HZyxVOS17lNJyrlU@firstcluster-bhxab.mongodb.net/postit?retryWrites=true',{useNewUrlParser:true}).then((result) => {
    
}).catch((err) => {
    console.log(err)
});
module.exports=mongooseConnection;