// DOM elements
const currentTodos = document.querySelector("#currentTodos")
const finishedTodos = document.querySelector("#finishedTodos")
const todoForm = document.querySelector("#todoForm")
const todoInput = document.querySelector("#todoInput")
const clearButton = document.querySelector("#clearButton")

// console.log(currentTodos, finishedTodos, todoForm, todoInput, clearButton)

// clear all child elements out of a give DOM element
const clearElement = element => {
    while(element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

todoForm.addEventListener("submit", e => {
    // stop the form from refreshing the page
    e.preventDefault()
    // console.log(todoInput.value)
    // create a new li
    const newTodoLi = document.createElement("li") // "make new feature"
    const finishTodoButton = document.createElement("button")
    // set the li's inner text to be what the user typed
    newTodoLi.innerText = todoInput.value
    // set properties of button
    finishTodoButton.innerText = "finish"
    finishTodoButton.addEventListener("click", () => {
        // remove newTodoLi from current todos
        currentTodos.removeChild(newTodoLi)
        // remove button from the newTodoLi
        newTodoLi.removeChild(finishTodoButton)
        // cross out finsihed todo with css
        newTodoLi.style.textDecoration = "line-through"
        // append newTodoLi to finished
        finishedTodos.appendChild(newTodoLi)
    })
    // append the todo to the current todos
    newTodoLi.append(finishTodoButton)
    currentTodos.append(newTodoLi)
    // clear out the text of the input
    todoInput.value = ""
})

clearButton.addEventListener("click", () => {
    // clear out both todo lists
    clearElement(currentTodos)
    clearElement(finishedTodos)
})