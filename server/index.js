const http = require('http')

const server = http.createServer((request, response) => {
     response.end("OK")
 })

 server.listen(3247,() => console.log("J'écoute sur le port 3247."))