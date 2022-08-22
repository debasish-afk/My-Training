const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author')
//     res.send({data: specificBook})
// }

// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails

// Write a POST api that creates a book from the details in the request body. The api takes both the author and publisher from the request body. 

const createBookWithpubauth = async function(req,res){
    let book = req.body
    let authorId = book.author
    let pubId = book.publisher
    let validAuth = await authorModel.findById(authorId)
    let validPub = await publisherModel.findById(pubId)
    
    if(!authorId){
        return res.send("author_id is required")
    }else if(!pubId){
        return res.send("publisher_id is required")
    }else if(!validAuth){
        return res.send("author is not present")
    }else if(!validPub){
        return res.send("publisher is not present")
    }
        let bookCreated = await bookModel.create(book)
        res.send({msg:bookCreated})
}


const getBookWithAuthPub = async function(req,res){
    let bookWithData = await bookModel.find().populate(['author','publisher'])
    res.send({msg:bookWithData})
}


const updatePub = async function(req,res){
    let pubId = await publisherModel.find({name:["Penguine","HarperCollins"]}).select({_id:1})
    // console.log(pubId)
    let updateBook = await bookModel.updateMany({publisher:pubId},{$set:{isHardCover:true}},{new:true})
    res.send({msg:updateBook})
}

const updateprice = async function(req,res){
    let authorId = await authorModel.find({ratings:{$gt:3.5}}).select({_id:1})
    let bookpriceUpdt = await bookModel.updateMany({author:authorId},{$inc:{price:+10}},{new:true})
    res.send({msg:bookpriceUpdt})
}



module.exports.createBookWithpubauth = createBookWithpubauth
module.exports.getBookWithAuthPub = getBookWithAuthPub
module.exports.updatePub = updatePub
module.exports.updateprice = updateprice