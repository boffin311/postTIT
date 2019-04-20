const express=require('express')
const routes=express.Router();
const allPostcontroller=require('../controller/allPostController')
routes.get('/',allPostcontroller.getAllPosts)
routes.get('/getall/posts',allPostcontroller.getAllPosts)
module.exports=routes