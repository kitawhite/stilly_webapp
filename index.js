console.log("Hello World")

const textarea = document.querySelector('textarea')
const addbutton = document.getElementById('AddButton')
const todocontainer = document.querySelector('.TodoContainer')

let todolist = []

function addTodo() {
    const todo = textarea.value
    if (!todo)
    {
        return
    }
    console.log('Add todo: ',todo)
    
    todolist.push(todo)
}

function updateUI() {
    return
}

addbutton.addEventListener('click', addTodo)