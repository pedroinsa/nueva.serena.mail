const { Router } = require("express")
const { sendEmail } = require("../controllers/controllers")
const router = Router()


router.get("/", (req, res) => {
    res.send("welcome")
})
router.post("/", sendEmail)




module.exports = router