const dotenv = require("dotenv")
dotenv.config()

module.exports = {
    EMAIL: process.env.EMAIL,
    EMAIL_KEY: process.env.EMAIL_KEY,
    PORT_EMAIL: process.env.PORT_EMAIL,
    HOST: process.env.HOST,
    PORT: process.env.PORT
}