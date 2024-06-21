const usedatas = require('../models/userModel')
const jwt = require('jsonwebtoken')

exports.registerController = async (req, res) => {
    console.log('inside register controll');
    const { firstname, lastname, email, password, phno } = req.body
    try {
        const existingUser = await usedatas.findOne({ email })
        if (existingUser) {
            res.status(406).json('This is a registered user')
        } else {
            const newUser = new usedatas({
                firstname, lastname, email, password, phno
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(401).json(err)
    }
    res.status(200).json("success")
}

exports.loginController = async (req, res) => {
    const {email, password} = req.body
    console.log('login controller');
    console.log(email, password);
    try {
        const existingUser = await usedatas.findOne({email, password})
        if(existingUser) {
            const token = jwt.sign({userId:existingUser._id},process.env.JWT_PASSWORD)
            res.status(200).json({
                    user:existingUser,
                    token
                })
        } else {
            res.status(401).json('invalid entry')
        }
    } catch (err) {
        res.status(401).json(err)
    }


}

exports.listUserController = async(req,res)=>{
    try{
        const allUsers = await usedatas.find({},'-password')
        res.status(200).json(allUsers)
    }catch(err){
        res.status(401).json(err)
    }
}

exports.listUserByIdController = async (req,res)=>{
    try{
        const allUsers = await usedatas.findById(req.params.id,'-password')
        if(allUsers){
            res.status(200).json(allUsers)
        }else{
            res.status(404).json('username not found')
        }
    }catch(err){
        res.status(500).json(err)
    }
}