fetch("http://localhost:3247/todos")
    .then(response => response.json())
    .then(todos => {
        const todosElem = document.getElementById('todos')
        todosElem.innerHTML = JSON.stringify(todos)
    })