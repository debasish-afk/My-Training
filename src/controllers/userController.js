const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData

const creatNewBook = async function (req,res){
    let book = req.body
    let savedBook = await UserModel.create(book)
    res.send({msg: savedBook})
}

const getBookList = async function(req,res){
    let allBooks = await UserModel.find()
    res.send({msg: allBooks})
}

module.exports.creatNewBook = creatNewBook
module.exports.getBookList = getBookList