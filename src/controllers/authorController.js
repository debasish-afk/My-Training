const authorModel = require("../models/authorModel")
const AuthorModel= require("../models/authorModel")

// Write a POST api that creates an author from the details in request body

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

// The authorId is present in the request body. If absent send an error message that this detail is required

// const wantAuthorId = async function(req,res){
//     let authorId = await AuthorModel.find({})
// }

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData




