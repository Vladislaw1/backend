const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const dotenv = require("dotenv")

dotenv.config()

const {DB_HOST} = process.env

const app = express()

app.use(cors())

app.use("/", (req,res,next) => {
    res.end(`<p>Hello World</p>`)
})

mongoose.connect(DB_HOST,{
    useFindAndModify: false,
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{
    app.listen(4001, () => {
        console.log("start server")
    })
})

