const path=require('path')
const bcrypt=require('bcryptjs')
const LoginUser=require('../models/signInModel')
module.exports.getLoginPage=(req,res,next)=>{
    //res.sendFile(path.join(__dirname,"../","view","login.html"))
    console.log(req.session.isLoggedIn)
    res.render('signIn',{
        isAuthenticated:req.session.isLoggedIn,
    })
}


module.exports.postLoginUser=(req,res,next)=>{
  //  console.log(req.body)
    let email=req.body.email;
    let password=req.body.password;
      
    LoginUser.find({email:email}).then((result) => {
        console.log(result.length)
        if(result.length==0){
        bcrypt.hash(password,12).then((result) => {
            let loginUser=new LoginUser({
                email:email,
                password:result
            });
            loginUser.save().then((result) => {
              //  console.log(result)
            }).catch((err) => {
               console.log(err) 
            });  
        }).catch((err) => {
            
         }); 
       req.session.isLoggedIn=true;
        res.redirect('/') 
    } 

    else{
        res.redirect('/signIn')
    }
    }).catch((err) => {
     console.log(err)   
    });
    
}