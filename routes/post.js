const {Router} = require("express")
const router = Router()
const mongoose = require("mongoose")
const login = require("../middleware/login")
const Post = mongoose.model("Post")

router.get("/allpost", (req, res)=>{
    Post.find()
    .populate("posteBy", "_id, name")
    .then(posts =>{
        res.json({posts})
    })
    .catch(err =>{
        console.log(err);
    })
})

router.post("/createpost", login, (req, res)=>{
    const {title, body} = req.body
    if(!title || !body){
        return res.status(422).json({error: "Please add all the fieds"})
    }

    req.user.password = undefined
    const post = new Post({
        title: title,
        body: body,
        posteBy: req.user
    })

    post.save().then(result =>{
        res.json({post: result}).catch(err =>{
            console.log(err);
        })
    })
})

router.get("/mypost", login, (req, res)=>{
    Post.find({posteBy: req.user._id})
    .populate("posteBy", "_id, name")
    .then(myPost =>{
        res.json({myPost})
    })
    .catch(err =>{
        console.log(err);
    })
})
// 1
module.exports = router