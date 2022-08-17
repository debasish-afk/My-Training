const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)


router.post("/creatBook",BookController.createBook)

router.get("/getBookList",BookController.getBookData)

router.get("/getBooksInyr",BookController.getBookYear)

router.get("/getcond",BookController.getParticularBooks)

router.get("/bookprice",BookController.inrBooks)

router.get("/getBooks",BookController.getRandomBooks)

module.exports = router;


