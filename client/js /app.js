fetch("http://localhost:3247/todos")
    .then(response => reponse.json())
    .then(todos => {
        console.log(todos)
    })