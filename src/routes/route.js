const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middlwear = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middlwear.authenticate,middlwear.authorise, userController.getUserData)
router.post("/users/:userId/posts",middlwear.authorise, userController.postMessage)

router.put("/users/:userId",middlwear.authenticate,middlwear.authorise, userController.updateUser)
router.delete('/users/:userId',middlwear.authenticate,middlwear.authorise, userController.deleteUser)

module.exports = router;