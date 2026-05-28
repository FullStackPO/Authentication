const express = require('express')
const loginModel = require('../models/login.model')

const authRouter = express.Router()

authRouter.post('/register', async(req , res) => {
    const {name, contact, email, userid , password} = req.body

   const registerUser =  await loginModel.create({ name, contact, email, userid, password})

   res.status(201).json({
    registerUser
   })
})

module.exports = authRouter