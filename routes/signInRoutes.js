const express=require('express')
const bodyParser=require('body-parser')
const signInConroller=require('../controller/signInConroller')
const routes=express.Router();

routes.use(bodyParser.urlencoded({extended:false}))
routes.post('/signIn/signInUser',signInConroller.postLoginUser);
routes.get('/signIn',signInConroller.getLoginPage);


module.exports=routes;
