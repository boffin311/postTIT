const Posts=require('../models/postModel')
module.exports.getAllPosts=(req,res,next)=>{
    Posts.find().then((result) => {
     console.log(result)
     if(req.path=='/'){
     res.render('allPost',{isAuthenticated:req.session.isLoggedIn,allPosts:result})  
     }
     else{
         res.json(result)
     }
    
    }).catch((err) => {
        console.log(err)
    });
   
}