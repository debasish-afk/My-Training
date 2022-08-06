const express = require('express');
const router = express.Router();
const add = require("../logger/logger")
const duo = require("../util/helper")
const tele = require("../validator/formatter")

router.get('/test-me', function (req, res) {
    
    add.deba()
    duo.help()
    tele.foo()
    res.send("hello guys, how are you")
});


router.get('/test-you', function (req, res) {
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data', function (req, res) {

})
module.exports = router;
// adding this comment for no reason