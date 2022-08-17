document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.querySelector('#todo-list')
    const todoListFinished = document.querySelector('#todo-list-finished')
    const todoForm = document.querySelector('form')
    const todoInput = document.querySelector('#todo-input')
    const clearButton = document.querySelector('#clear-button')

    // console.log(todoList, todoListFinished, todoForm, todoInput, clearButton)

    todoForm.addEventListener('submit', e => {
        // prevent the refresh on form submission
        e.preventDefault()
        // console.log('form was submitted!')
        // create a new todo list item
        const li = document.createElement('li')
        const deleteButton = document.createElement('button')
        // set the propertes of the new elements, add the delete button to the li
        li.innerText = todoInput.value
        deleteButton.innerText = 'check'
        deleteButton.addEventListener('click', () => {
            // remove this todo from the current list
            todoList.removeChild(li)
            // add this todo to the finished list
            todoListFinished.appendChild(li)
            // cross this todo out with text decoration
            li.style.textDecoration = 'line-through'
            // get rid of the button
            li.removeChild(deleteButton)
            
        })
        // clear the input the use typed in
        todoInput.value = ''
        // append the new todo to the DOM tree
        li.appendChild(deleteButton)
        todoList.append(li)
    })

    clearButton.addEventListener('click', () => { 
        // clear out both lists with while loops
        while (todoList.firstChild) {
            todoList.removeChild(todoList.firstChild)
        }

        while (todoListFinished.firstChild) {
            todoListFinished.removeChild(todoListFinished.firstChild)
        }
    })
})