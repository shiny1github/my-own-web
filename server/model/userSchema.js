const mongooes= require('mongoose');
const bcrypt= require('bcryptjs');

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
    }
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
const User = mongooes.model('USER',userSchema);

module.exports=User;
