const requireLogin= require ('../middleware/requireLogin');
const requireCredit =require ('../middleware/requireCredits');
const mongoose=require('mongoose');
const Survey=mongoose.model('surveys');
const Mailer=require('../services/Mailer')
const surveyTemplate=require('../services/emailTemplate/emailTemplate')

module.exports=app =>{
    app.get('/api/surveys/thanks',(req,res)=>{
        res.send('Thanks For Voting')
    });
    
    app.post('/api/surveys',requireLogin,requireCredit,async(req,res)=>{ 
        const {title,subject,body,recipients}=req.body;
        const survey=new Survey({
            title,
            subject,
            body,
            recipients:recipients.split(',').map(email=>({email})),
            _user:req.user.id,
            dateSend:Date.now() 
        });
        //Grete place to send email
        const mailer=new Mailer(survey,surveyTemplate(survey))
      try{
        await  mailer.send();
       await survey.save();
       req.user.credits-=1;
       const user=await req.user.save();
       res.send(user);
      }
      catch(err){
          res.status(422).send(err);
      }
    });
}
