const express = require('express')
const app = express()
const path = require('path')
var PORT=process.env.PORT ||5000
const session = require('express-session')
const logOutRoutes=require('./routes/loginRoutes')
const MongodbConnectSession = require('connect-mongodb-session')(session)
const store = new MongodbConnectSession({
    uri: 'mongodb://localhost:27017/shopIt',
    collection: 'sessions'
})
const mongooseConnection = require('./utils/database')
const signInRoutes = require("./routes/signInRoutes")
const allPostRoutes=require('./routes/allPostRoutes')
const writepostRoutes=require('./routes/writePostRoutes')
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
    secret: 'my Secret',
    resave: false,
    saveUninitialized: false,
    store:store
}))
app.set('view engine', 'ejs')
app.set('views', 'view')
app.use(signInRoutes)
app.use(logOutRoutes)
app.use(writepostRoutes)
app.use(allPostRoutes)
// app.use("/", (req, res, next) => {
//     // res.sendFile(path.join(__dirname,'view','index.html'))
//     console.log(req.session.isLoggedIn)
//     res.render('allPost', { isAuthenticated: req.session.isLoggedIn })
// })

mongooseConnection.then(result => {
    // console.log(result)
    app.listen(PORT,()=>{
        console.log("server running at port:5000")
    })
}).catch(err => {
    console.log(err)
})

