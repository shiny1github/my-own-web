const mongooes= require('mongoose');
const bcrypt= require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongooes.Schema({
    name: {
        type:String,
        require: true

    },

    email:{
        type: String,
        require: true
    },
    phone:{
        type: Number,
        require: true
    },
    work:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    cpassword:{
        type: String,
        require: true
    },
    tokens:[
        {
            token:{
                type: String,
                require: true
            }
        }
    ]
})



//password hashing

userSchema.pre('save', async function(next){
    console.log("hashing code is running");
    if(this.isModified('password')){
        this.password= await bcrypt.hash(this.password,12);
        this.cpassword= await bcrypt.hash(this.cpassword,12);

    }
    next();

})
//generating token
userSchema.methods.generateAuthToken= async function() {
    try {
        let token =jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
        
    } catch (err) {
        console.log(err);
        
    }
    
}
const User = mongooes.model('USER',userSchema);

module.exports=User;
