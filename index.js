const express=require('express')
const mongoose=require('mongoose')
const keys=require('./config/keys')
const cookieSession=require('cookie-session')
const passport=require('passport')
const bodyParser=require('body-parser')
const app=express()

require('./models/User')
require('./services/passport')

mongoose.connect(keys.mongoURL)
app.use(bodyParser.json())
app.use(cookieSession({
    maxAge:30 * 24 * 60 * 60 * 1000,
    keys:[keys.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())

require('./route/authRoute')(app)
require('./route/billingRoute')(app)
// require('./route/registation')(app)
if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));
    const path=require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    });
}

const PORT=process.env.PORT || 5000
console.log('Database Connection Established Port No-'+PORT)
app.listen(PORT);
