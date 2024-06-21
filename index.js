require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
require('./db/mongodb')
require('./models/userModel')

const regServer = express()

regServer.use(cors())
regServer.use(express.json())
regServer.use(router)

const PORT = 3000 || process.env.PORT

regServer.listen(PORT,()=>{
    console.log(`Port started : ${PORT}`);
})