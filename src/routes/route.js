const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const commMiddlewear = require("../middlewear/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/users", userController.createUser  )

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)

// router.put("/users/:userId", userController.updateUser)

router.post("/userRegistration",userController.createUsers)

router.post("/loginUsers",userController.loginUsers)

router.get("/getUsersData/:userId",commMiddlewear.authentication,userController.getUsersData)

router.put("/updateUser/:userId",commMiddlewear.authentication,userController.updateUser)

router.put("/docDelete/:userId",commMiddlewear.authentication,userController.docDelete)

module.exports = router;