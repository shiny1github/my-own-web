const express= require('express');
const router =express.Router();
const bcrypt= require('bcryptjs');

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

    const{name,email,phone,work,password,cpassword}=req.body; 
    //ES2015

if(!name||!email||!phone||!work||!password||!cpassword){
    return res.status(422).json({error:"fillup all the data"});

}

try{

    const userExist = await User.findOne({email: email })
    if (userExist){
      return res.status(422).json({error:"Email already registered"});
    }else if(password !=cpassword){
        return res.status(422).json({error:"Password not match"});

    }else {

        const user = new User({name,email,phone,work,password,cpassword})
        //hashing
         await user.save();
         res.status(201).json({message: "Successfuly Registered"});
    }
    
    

    

}catch(err){
    console.log(err);

}
});


//login data
router.post('/signin',async (req,res)=>{
   
    try{
        const{email,password}=req.body;
        if(!email||!password)
        {
            return res.status(400).json({error:"please fill the data"});
    
        }  
        const userLogin  = await User.findOne({email: email });
        //console.log(userLogin);

        if(userLogin){
            const isMatch=await bcrypt.compare(password,userLogin.password);

        if(!isMatch){
            res.status(400).json({error:"Invalid Credentials pass"});

        }else{
            res.json({message:"Signin Successfuly"});
        }

        }else{
            res.status(400).json({error:"Invalid Credentials"});


        }
        
        

    }catch(err){
        console.log(err);

    }

    
})
    




module.exports=router;