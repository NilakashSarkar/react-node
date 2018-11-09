const validator=require('validator');
const mongoose=require('mongoose')
const {Schema}=mongoose
const registationSchema=new Schema({
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
              }}})


mongoose.model('registation',registationSchema)
