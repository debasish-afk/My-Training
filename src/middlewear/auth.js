const jwt = require("jsonwebtoken")

const authentication = async function (req, res, next) {
    let token = req.headers["x-auth-token"]
    if (!token)
        return res.send({ status: false, msg: "token must be present" })

    let decodeToken = jwt.verify(token, "juju plutonium very very secret key")
    if (!decodeToken)
        return res.send({ status: false, msg: "token is invalid" })

    next()
}

module.exports.authentication = authentication