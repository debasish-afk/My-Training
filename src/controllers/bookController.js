const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel = require("../models/authorModel")

// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE



// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
let getAuthors = async function(req,res){
    let data = req.body
    let authorId = data.author_id
    if(!authorId){
        return res.send({msg:"don't have author id"})
    }else{
    let allAuthors = await AuthorModel.create(data)
    res.send({msg:allAuthors})
    }
}

const getBooks = async function(req,res){
    let data = req.body
    let authorId = data.author_id
    if(!authorId){
        return res.send({msg:"don't have author id"})
    }else{
    let allBooks = await BookModel.create(data)
    res.send({msg:allBooks})
    }
}

const chetansBook = async function(req,res){
    let data = await AuthorModel.find({author_name:"Chetan Bhagat"})
    // console.log(data)
    let chetansId = data[0].author_id
    // console.log(chetansId)
    let bookList = await BookModel.find({author_id:chetansId})
    res.send({msg:bookList})
}

const authName = async function(req,res){
    let author = await BookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
    // console.log(author)
    let authorName = await AuthorModel.find({author_id:author.author_id}).select({author_name:1})
    // console.log(authorName)
    let price = author.price
    res.send({msg:authorName,price})
}

// Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 
// bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
// bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) loop and get all the authorName corresponding to the authorId’s ( by querying authorModel)

const authorName = async function(req,res){
  let authorId = await BookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1})
  console.log(authorId)
  let getid = authorId.map(x=>x.author_id)
  console.log(getid)
  let Name = await AuthorModel.find({author_id:getid}).select({author_name:1})
  console.log(Name)
  res.send({msg:Name})
}



module.exports.getAuthors = getAuthors
module.exports.getBooks = getBooks
module.exports.chetansBook = chetansBook
module.exports.authName = authName
 module.exports.authorName = authorName
