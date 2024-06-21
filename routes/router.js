const express = require('express')
const router = new express.Router()
const userController = require('../Controllers/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')

router.post('/register',userController.registerController)

router.post('/login',userController.loginController)

router.get('/userdetails',jwtMiddleware,userController.listUserController)

router.get('/userdetails/:id',jwtMiddleware,userController.listUserByIdController)



module.exports = router