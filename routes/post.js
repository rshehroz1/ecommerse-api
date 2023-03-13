const {Router} = require("express")
const router = Router()
const mongoose = require("mongoose")
const login = require("../middleware/login")

router.post("/createpost", login, (req, res)=>{
    const {title, body} = req.body
    if(!title || !body){
        return res.status(422).json({error: "Please add all the fieds"})
    }

    console.log(req.user);
    res.send("ok")
})

module.exports = router