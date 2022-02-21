import React from 'react'

function Todo({ todo, updateTodo, deleteTodo}) {
    //update function to set updated value == task, and creating a copy of the array
    const handleUpdateTask = (e) => {
        console.log("todo-> handleUpdateTask")
        const updatedTodo = {
            ...todo,
            task: e.target.value
        }
        //sending it up to TodoApp.js
        updateTodo(updatedTodo)
    }

    const toggleInput = (e) => {
        e.preventDefault();
        console.log("Todo-> toggle input")
        console.log(todo)

        //when toggeling "change" button, li becomes enabled, and button changes to save. And vice-versa
        const updatedTodo = {
            ...todo,
            disabled: !todo.disabled,
            changeBtnLabel: todo.disabled ? "Save" : "Change"
        }

        //sending it up to TodoApp.js
        updateTodo(updatedTodo)
    }

    // create new function to send up the Id of the deleted Li to deleteTodo in TodoApp.js
    const deletedTodo = (e) => {
        e.preventDefault();

        //todo (props) has access to id 
        deleteTodo(todo.id)
    }

    //Create new function to send up a version up updatedTodo that changes boolean value of completed
    const handleCompleteBtn = (e) => {
        e.preventDefault();

        const updatedTodo = {
            ...todo,
            completed: !todo.completed,
            CompleteBtnLabel: todo.completed ? "Completed &#10004" : "Alter"
        }

        updateTodo(updatedTodo)
    }
    
  return (
        <li>
            <input 
                type="text" 
                value={todo.task} 
                disabled={todo.disabled} 
                onChange={handleUpdateTask}
            />
            <button onClick={toggleInput}>{todo.changeBtnLabel}</button>
            <button onClick={deletedTodo}>Delete</button>
            <button onClick={handleCompleteBtn}>Completed &#10004;</button>
        </li>
    )
  }

export default Todo