const server = require("./src/index")
const { PORT } = require("./config/env")


server.listen(PORT, () => {
    console.log(`connected on port ${PORT}`)

})