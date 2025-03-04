const { request } = require("express")
const jwt = require("jsonwebtoken")

function verifyJwt(req , res , next ) {
    const token = req.cookies.authToken

    if(!token) {
        return res.status(401).json({message : "No auth token acces denied"})
    }

    
}