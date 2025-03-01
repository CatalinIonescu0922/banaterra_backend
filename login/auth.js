require("dotenv").config();
const express = require("express")
const db = require("../dbconnect")
const router = express.Router()
const bycrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")


router.post("/login", async(req,res) =>{
     const {email , password } = req.body;

     const [rows] = await db.pool.query(`Select * from Users u where u.email = ?`, [email])

     if(rows.length === 0){
        return res.status(400).json({message : "User not found "})
     }
     const user = rows[0]
     const validPassword = await bycrypt.compare(password, user.password_hash)
     if(!validPassword) 
      return res.status(400).json({message : "Invalid password "})
   // take the role and permisions of the user 
   const [role] = await db.pool.query(`Select * from Roles r where r.id = (Select role_id from user_roles where user_roles.user_id = ?) `,[user.id])
   const [permisions] = await db.pool.query(`select p.name from Permisions p where p.id = (Select permision_id from Permision_role where role_id = ? ) `,[role.id]) 
   const permissionsName = permisions.map(p => p.name);
     // the user info payload to the token
     const userInfo = {id : user.id, email : user.email, permision : permissionsName}
     const token = jwt.sign(userInfo, process.env.SECRET_KEY , {expiresIn : "1h"})
     res.cookie("authToken" , token , {
        httpOnly : true,
        secure : false,
        sameSite : "lax",
        maxAge : 3600000
     })
     res.status(200).json({message : "Login successful"})
})