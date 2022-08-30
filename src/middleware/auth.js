const jwt = require('jsonwebtoken')

const authenticate = function (req, res, next) {
    //check the token in request header
   try {let token = req.headers["x-auth-token"];
    if (!token)
        return res.status(401).send({ status: false, msg: "Token must required" });

    //validate this token
    let decodedToken = jwt.verify(token, "functionup-thorium");
    if (!decodedToken)
        return res.status(403).send({ status: false, msg: "Not a valid token" });

    next()}
    catch(err){
        res.status(500).send({msg:err.message})
    }
}


const authorise = function (req, res, next) {
    try{
        let token = req.headers["x-auth-token"];
    if (!token)
        return res.status(401).send({ status: false, msg: "Token must required" });

    //validate this token
    let decodedToken = jwt.verify(token, "functionup-thorium");
    if (!decodedToken)
        return res.status(403).send({ status: false, msg: "Not a valid token" });
    //userId for which the request is made. In this case message to be posted.
    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) return res.status(403).send({status: false, msg: 'Forbidden'})
    next()}
    catch(err){
       res.status(500).send({msg:err.message})
    }
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise