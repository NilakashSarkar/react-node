const validator=require('validator');

const schema=mongoose.Schema
const registationSchema=new schema({
          name:{
           type:String,
      
            required:true
          },
          phone:{
            type:Number,
            required:true
           
          },
          email:{
              type:String,
              required:true,
              trim:true,
              validator:{
                 validator: (v)=>{
                               return validator.isEmail(v)
                 },
                 message:`{VALUE} Is Not Email`
              }


          }
})


const registationModel=mongoose.model('registation',registationSchema)
module.exports=contactModel