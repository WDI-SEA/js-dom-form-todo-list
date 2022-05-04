document.addEventListener('DOMContentLoaded', () => {
  const todoList = document.querySelector('#todo-list')
  const finishedList = document.querySelector('#finished-list')

  document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault() // prevent page refresh
    // get the value from the input
    const todoInput = document.querySelector('#todo-input')
    // create a new list item
    const newLi = document.createElement('li')
    // set the text of the list item
    newLi.innerText = todoInput.value
    todoInput.value = ''
    // make up the delete button
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Finished'
    deleteButton.addEventListener('click', () => {
      // remove the todo from the list of current todos
      todoList.removeChild(newLi)
      // remove delete button
      newLi.removeChild(deleteButton)
      // add it to the list of finished todos
      finishedList.append(newLi)
      // apply a strick through text decoration
      newLi.style.textDecoration = 'line-through'
    })
    // append the button to the list item
    newLi.append(deleteButton)
    // append the list item onto the list of todos
    todoList.append(newLi)
  })
})