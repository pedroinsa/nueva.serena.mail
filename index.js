const server = require("./src/index")
const { PORT } = require("./config/env")
const port = PORT || 3000

server.listen(PORT, () => {
    console.log(`connected on port ${PORT}`)

})