const mongooes= require('mongoose');

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

const User = mongooes.model('USER',userSchema);

module.exports=User;