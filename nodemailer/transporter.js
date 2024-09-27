const nodemailer = require("nodemailer")
const { EMAIL, EMAIL_KEY, PORT_EMAIL, HOST } = require("../config/env")

const transporter = nodemailer.createTransport({
    host: HOST,
    port: PORT_EMAIL,
    secure: true,
    auth: {
        user: EMAIL,
        pass: EMAIL_KEY
    }

})



module.exports = transporter