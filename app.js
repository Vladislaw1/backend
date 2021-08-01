const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.use("/", () => {
    return (`<p>Hello World</p>`)
})

app.listen(4001, () => {
    console.log("start server")
})