const express = require('express');
const router = require('../authors');
const rounter = express.Router();

router.post('/' , async(req, res)=>{
    const {email , password } = req.body
})

module.exports = rounter