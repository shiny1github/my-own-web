const express= require('express');
const router =express.Router();

require('../db/conn');
const User= require('../model/userSchema');

router.get('/',(req,res) =>{
    res.send(`Hello Server with router js`);
});

//using promise 
/*router.post('/register',(req,res)=>{

    const{name,email,phone,work,password,cpassword}=req.body; //ES2015

if(!name||!email||!phone||!work||!password||!cpassword){
    return res.status(422).json({error:"fillup all the data"});

}

User.findOne({email: email })
  .then((userExist) => {
    if (userExist){
        return res.status(422).json({error:"Email already registered"});
    }

    const user = new User({name,email,phone,work,password,cpassword})

     user.save().then(()=>{
         res.status(201).json({message: "successfuly registered"});

     }).catch((err)=>res.status(500).json({error:"Registered Fail"}));
}).catch(err =>{console.log(err);});

    
});*/

//using Async Await

router.post('/register',async (req,res)=>{

    const{name,email,phone,work,password,cpassword}=req.body; //ES2015

if(!name||!email||!phone||!work||!password||!cpassword){
    return res.status(422).json({error:"fillup all the data"});

}

try{

    const userExist = await User.findOne({email: email })
    if (userExist){
      return res.status(422).json({error:"Email already registered"});
    }
    
    const user = new User({name,email,phone,work,password,cpassword})
    await user.save();
    res.status(201).json({message: "successfuly registered"});

    

}catch(err){
    console.log(err);

}



    
});



module.exports=router;