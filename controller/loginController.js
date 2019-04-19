const User=require('../models/signInModel')
const bcrypt=require('bcryptjs')
module.exports.getLogoutUser=(req,res,next)=>{
    req.session.destroy(err=>{
        res.redirect('/')
    })
   
}

module.exports.getLoginPage=(req,res,next)=>{
    res.render('login',{
        isAuthenticated:req.session.isLoggedIn
    })
}
module.exports.postLogin=(req,res,next)=>{
  
   let password=req.body.password;
   let email=req.body.email;

    User.find({email:email}).then((result) => {
        console.log(result)
           bcrypt.compare(password,result[0].password).then((result) => {
               console.log(result+" is one or zero  ")
               if(result)
               {
                req.session.isLoggedIn=true;
                res.redirect('/')
               }
               else{
                   res.redirect('/login')
               }
           }).catch((err) => {
               
           });
    }).catch((err) => {
        
    });

}