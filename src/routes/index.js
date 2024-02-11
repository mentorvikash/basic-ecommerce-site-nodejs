const express = require("express")
const router = express.Router()

// create a simle router
router.get("", (req, res) => {
    return res.status(200).send("welcome to home page")
})

module.exports = router