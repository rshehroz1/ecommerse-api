const { Schema, model } = require("mongoose")
const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: Number,
        require: true
    },
})

model("User", userSchema)