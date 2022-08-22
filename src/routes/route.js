const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.post("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post("/createPublisher",publisherController.createPublisher)

router.post("/createBookWithpubauth",bookController.createBookWithpubauth)

router.get("/getbookWithData",bookController.getBookWithAuthPub)

router.put("/updatePub",bookController.updatePub)

router.put("/updateprice",bookController.updateprice)

module.exports = router;