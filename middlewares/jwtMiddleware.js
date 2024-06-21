const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    const token = req.headers['authorization'].split(" ")[1]
    console.log(token);
    if(token){
        try{
            const jwtResponse = jwt.verify(token,process.env.JWT_PASSWORD)
            console.log(jwtResponse);
            req.payload = jwtResponse.userId
            next()
        }catch(err){
            res.status(401).json("invalid token")
        }
    }else{
        res.status(401).json("missing token")
    }
}
module.exports = jwtMiddleware