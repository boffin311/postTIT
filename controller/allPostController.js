const Posts=require('../models/postModel')
module.exports.getAllPosts=(req,res,next)=>{
    Posts.find().then((result) => {
     console.log(result)
     res.render('allPost',{isAuthenticated:req.session.isLoggedIn,allPosts:result})  
    }).catch((err) => {
        console.log(err)
    });
   
}