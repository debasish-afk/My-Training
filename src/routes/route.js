const express = require('express');
const _ = require('underscore')
const lol = require('lodash')
const abc = require('../introduction/intro')
const loggerModule = require('../logger/logger.js')
const formatterModule = require('../validator/formatter') 
const helperModule = require('../util/helper')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    loggerModule.printInfo()
    formatterModule.trimMyString()
    formatterModule.getUpperCaseString()
    formatterModule.changetoLowerCase()
    helperModule.getTodaysDate()
    helperModule.getCurrentMonth()
    helperModule.printBatchDetails()
    let weekdend = ['Saturday','Sunday','Monday']
    let result = _.first(weekdend, 2)
    console.log('Unserscore example resultr is ',result)

    let months = ["jan","feb","march","april","may","jun","jul","aug",
    "sept","oct","nov","dec"]
    let result2 = _.chunk(months, [size=1])
    console.log(result2)

    let odd = [1,3,5,7,9,11,13,15,17]
    let result3 = _.tail(odd)
    console.log(result3)
    
    let num1 = [2,5,4,2,5]
    let num2 = [3,2,5,8,9]
    let num3 = [4,6,5,2,8]
    let num4 = [2,5,6,3,9]
    let num5 = [8,5,7,4,2]
    let result4 = _.union(num1,num2,num3,num4,num5)
    console.log(result4)

    let object =[ ["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log(_.fromPairs(object))

    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason