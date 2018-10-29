const express=require('express')
const mongoose=require('mongoose')
const keys=require('./config/keys')
const cookieSession=require('cookie-session')
const passport=require('passport')
const app=express()
require('./models/User')
require('./services/passport')

mongoose.connect(keys.mongoURL)

app.use(cookieSession({
    maxAge:60 * 24 * 60 * 60 * 1000,
    keys:[keys.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())

require('./route/authRoute')(app)
//By default
app.get('/',(req,res) =>{
    res.send({'welcome ':'Nilakash'})
})
const PORT=process.env.PORT || 5000
console.log('Database Connection Established Port No-'+PORT)
app.listen(PORT);
