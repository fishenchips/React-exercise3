import React from 'react'

function Todo({ todo, updateTodo}) {
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

  return (
        <li>
            <input 
                type="text" 
                value={todo.task} 
                disabled={todo.disabled} 
                onChange={handleUpdateTask}
            />
            <button onClick={toggleInput}>{todo.changeBtnLabel}</button>
        </li>
    )
}

export default Todo