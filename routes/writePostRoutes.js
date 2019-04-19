const express=require('express')
const routes=express.Router()
const controller=require('../controller/writepostController')
routes.post("/writepost/newpostAdded",controller.postWritePage)
routes.get("/writepost",controller.getWritePostPage)

module.exports=routes