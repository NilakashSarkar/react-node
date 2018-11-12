const requireLogin= require ('../middleware/requireLogin');
const requireCredit =require ('../middleware/requireCredits');
const mongoose=require('mongoose');
const Survey=mongoose.model('surveys');
const Mailer=require('../services/Mailer')
const surveyTemplate=require('../services/emailTemplate/emailTemplate')

module.exports=app =>{
    app.post('/api/surveys',requireLogin,requireCredit,(req,res)=>{ 
        const {title,subject,body,recipients}=req.body;
        const survey=new Survey({
            title,
            subject,
            body,
            recipients:recipients.split(',').map(email=>({email})),
            _user:req.user.id,
            dateSend:Date.now      
        });
        //Grete place to send email
        const mailer=new Mailer(survey,surveyTemplate(survey))
        mailer.send();
    });
}
