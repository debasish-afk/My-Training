// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema( {
//     bookName: String, 
//     authorName: String, 
//     tags: [String],
    
//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     sales: {type: Number, default: 10}
// }, { timestamps: true });


// module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookName : String,
    prices : {
        indianPrice : String,
        europianPrice : String,
    },
    year : Number,
    tags : [String],
    authorName : String,
    totalPages : Number,
    stockAvailable : Boolean
})

module.exports = mongoose.model("book",bookSchema)