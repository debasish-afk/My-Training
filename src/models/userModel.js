const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,

//         required: true
//     },
//     emailId: String,
//     password: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "other"]
//     },
//     age: Number,
// }, { timestamps: true });

const userSchema = new mongoose.Schema(
    {

        firstName: String,
        lastName: String,
        mobile: String,
        emailId: String,
        password: String,
        gender: String,
        isDeleted: {
            type: Boolean,
            default: false
        }, //default value is false 
        age: Number
    }
)

module.exports = mongoose.model('User', userSchema)
