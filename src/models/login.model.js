const mongoose = require('mongoose')

const loginUserSchema = new mongoose.Schema({

    name : {
        type: String,
        trim: true,
        required : true
    },

    contact : {
        type : Number
    },

    email : {
        type : String,
        trim : true,
        unique : true,
        required : true
    },

    userid : {
        type : String,
        trim : true,
        unique : true,
        required : true
    },

    password : {
        type : String,
        trim : true,
        required : true
    }

}, ({timestamps:true}))

const loginModel = mongoose.model('loginUser', loginUserSchema)

module.exports = loginModel