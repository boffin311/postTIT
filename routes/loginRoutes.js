const express=require('express')
const loginController=require('../controller/loginController')
const routes=express.Router()
routes.get('/logoutuser',loginController.getLogoutUser)
routes.post('/login/loginUser',loginController.postLogin )
routes.get('/login',loginController.getLoginPage)
module.exports=routes