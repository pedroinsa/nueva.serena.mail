const express = require("express")
const morgan = require("morgan")
const routes = require("../routes/index")
const app = express()
app.use(morgan("dev"))
app.use(express.json())
app.use("/", routes)
app.use("*", (req, res) => {
    res.status(404).send("Not found")
})

module.exports = app


