const express = require('express')
const todo1 = require("../mocks/scoring_1.json")
const todo2 = require("../mocks/scoring_2.json")

const todos = [
    todo1,
    todo2
]
console.log(todos)

const app = express()

app.get("/", (request, response) => {
    response.send("OK")
})

 app.listen(3247,() => console.log("J'écoute sur le port 3247."))