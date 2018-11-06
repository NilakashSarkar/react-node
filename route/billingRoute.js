const keys=require('../config/dev')
const stripe=require('stripe')(keys.STRIPESECRETKEY);


module.exports=app =>{
    app.post('/api/stripe',async(req,res)=>{ 
        if(!req.user){
            res.status(401).send({error:'You must log In'})
        }
    const charge=await stripe.charges.create({
    amount:500,
    currency:'usd',
    description:'$5 for 5 credit',
    source:req.body.id

});
req.user.credits+=5;
const user=await req.user.save();
res.send(user);
 //console.log(charge)
    });
};