document.addEventListener('DOMContentLoaded', () => {
  const todoList = document.querySelector('#todo-list')
  const todoListForm = document.querySelector('#todo-form')
  const todoListInput = document.querySelector('#todo-input')
  const todoClearButton = document.querySelector('#todo-clear-button')
  const todoListFinished = document.querySelector('#todo-list-finished')

  todoListForm.addEventListener('submit', function(event) {
    event.preventDefault()
    // console.log(todoListInput.value)
    // create new element and clear the input
    const newTodo = document.createElement('li')
    newTodo.innerText = todoListInput.value
    todoListInput.value = ''
    // create a button that will delete the todo
    const deleteTodo = document.createElement('button')
    deleteTodo.innerText = 'Finished Todo'
    deleteTodo.addEventListener('click', function() {
      // swap the list the todo is on
      newTodo.removeChild(deleteTodo)
      todoListFinished.appendChild(newTodo)
      newTodo.style.textDecoration = 'line-through'
    })
    // add the button to the todo
    newTodo.appendChild(deleteTodo)
    // add todo to the list
    todoList.appendChild(newTodo)
  })

  todoClearButton.addEventListener('click', function() {
    // clear out both lists
    while (todoListFinished.firstChild) {  
      todoListFinished.removeChild(todoListFinished.firstChild)
    }
    while (todoList.firstChild) {
      todoList.removeChild(todoList.firstChild)
    }
  })
})