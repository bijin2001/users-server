const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    phno:{
        type:String,
        required:true
    }
})

const usedatas = mongoose.model("usedata",userSchema)
module.exports = usedatas