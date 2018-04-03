const express = require('express')
const todo1 = require("../mocks/scoring_1.json")
const todo2 = require("../mocks/scoring_2.json")

const todos = [
    todo1,
    todo2
]

console.log(todos)

const app = express()

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })

app.get("/", (request, response) => {
    response.send("OK")
})

app.get("/todos", (request, response) =>{
    response.json(todos)
} )

 app.listen(3247,() => console.log("J'écoute sur le port 3247."))