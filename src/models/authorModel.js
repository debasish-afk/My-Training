const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({    

    author_id:Number,
    author_name:String,
    age:Number,
    address:String
} ,
{ 
    author_id:Number,
    author_name:String,
    age:Number,
    address:String
} ,
{    
    author_id:Number,
    author_name:String,
    age:Number,
    address:String
})

module.exports = mongoose.model("Author",authorSchema)