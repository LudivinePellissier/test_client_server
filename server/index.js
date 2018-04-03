const express = require('express')

const app = express()

app.get("/", (request, response) => {
    response.send("OK")
})

 app.listen(3247,() => console.log("J'écoute sur le port 3247."))