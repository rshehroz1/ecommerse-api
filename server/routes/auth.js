const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")

router.get("/", (req, res) =>{
    res.send("hihi")
})

router.post('/signup',(req, res)=>{
    const {name, email, password} = req.body;
    if (!email || !password || !name){
        res.status(422).json({error: "Iltimos barcha ma'lumotlarni kiriting"})
    }
    res.json({msg: "Muvaffaqiyatli yuborildi"})
})

module.exports = router