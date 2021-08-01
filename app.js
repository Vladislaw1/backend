const express = require("express")

const app = express()

app.use("/",()=>{
    console.log("Start")
})

app.listen(4001,()=>{
    console.log("start server")
})