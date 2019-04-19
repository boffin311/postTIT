const PostSchema=require('../models/postModel')
const mongoose=require('mongoose') 
module.exports.getWritePostPage=(req,res,next)=>{
    res.render('writepost',{isAuthenticated:req.session.isLoggedIn})
}
module.exports.postWritePage=(req,res,next)=>{
    let postSchema=new PostSchema({title:req.body.title,description:req.body.description,post:req.body.post})
    postSchema.save().then((result) => {
        console.log(result)
        res.redirect('/writepost')
    }).catch((err) => {
        console.log(err)
    });
    
}