const express = require('express');
const app = express()

// implement json parse and urlencoder
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// set view engine - ejs
app.set("view engine", "ejs")

// importing routes
const indexRoute = require("./routes/index")
app.use("/", indexRoute)

module.exports = app