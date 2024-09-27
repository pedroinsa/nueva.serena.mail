const transporter = require("../nodemailer/transporter")
const defineSheet = require("../util/sheet")

function sendEmail(req, res) {
    const { name, message, email } = req.body
    let mailObject = defineSheet(name, message, email)
    transporter.sendMail(mailObject, (error, info) => {
        if (error) {
            res.json(error)
        } else {
            console.log("sent")
            res.send("mail sent")

        }
    })
}


module.exports = {
    sendEmail
}