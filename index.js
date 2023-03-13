const express = require("express");
const app = express();
const mongoose = require("mongoose")
const PORT = 3000;
const { MONGO_URI } = require("./keys")

require("./models/user")

app.use(express.json())

app.use(require('./routes/auth'))
app.use(require('./routes/post'))

// mongodb ulsh uchun
mongoose.connect(MONGO_URI);

app.listen(PORT, ()=>{
    console.log(`Server has been started on port ${PORT}`);
})