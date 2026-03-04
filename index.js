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
    textarea.value = ''
    updateUI()
}

function editTodo(index) {
    // Sets the textbox's text to be the same as the todo that has been selected
    textarea.value = todoList[index]
    todoList = todoList.filter((element, elementIndex) => {
        if (index === elementIndex) {
            // returning false to the filter function causes filter to REMOVE the selected element
            return false
        }
        return true
    })
    updateUI()  
}

function deleteTodo(index) {
    textarea.value = todoList[index]
    todoList = todoList.filter((element, elementIndex) => {
        if (index === elementIndex) {
            return false
        }
        return true
    })
    updateUI()  
}

function updateUI() {
    
    let newInnerHTML = ''
    todolist.forEach((todoElement, todoIndex) => {
        // Note that for multiline strings, backticks are used insteead of the single apostrophe
        newInnerHTML += ` 
                <div class = "Todo">
                    <p>${todoElement}
                    </p>
                    <div class = "ButtonContainer">
                        <button class = "ButtonIcon" onclick ="editTodo(${todoIndex})">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button class = "ButtonIcon" onclick ="editTodo(${todoIndex})">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
        `

    })
    
    todocontainer.innerHTML = newInnerHTML




}

addbutton.addEventListener('click', addTodo)