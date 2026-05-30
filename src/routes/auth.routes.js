const express = require('express')
const loginModel = require('../models/login.model')
const jwt = require('jsonwebtoken')

const authRouter = express.Router()

authRouter.post('/register', async(req , res) => {
    const {name, contact, email, userid , password} = req.body

    const isUseEmail = await loginModel.findOne({ email })

    const isUserID = await loginModel.findOne({ userid })

    if(isUseEmail){
        return res.status(409).json({
            'message':'Email already in use.'
        })
    }

    if(isUserID){
        return res.status(409).json({
            'message':'User ID already created.'
        })
    }


   const registerUser =  await loginModel.create({ name, contact, email, userid, password})

   const token = jwt.sign({
        id: registerUser._id
    },
    process.env.JWT_SECRET
    )

    res.cookie('jwt_token', token)

   res.status(201).json({
    registerUser,
    token
   })
})

module.exports = authRouter