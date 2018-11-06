
const registationModel=require('../models/Registation')
module.exports=app =>{
    app.post('/api/registation',(req,res,next)=>{
        const registation=new registationModel({
            name:req.body.name,
            phone:req.body.phone,
            email:req.body.email
        })
     
        registation.save()
        .then(data=>{
            res.json({
                message:"Contact added success",
                   contact:data
            })
     
        })
        .catch(err=>console.log(err))
     })
     
}
