import React from 'react'

function Todo({ todo, updateTodo}) {
    const handleUpdateTask = (e) => {
        console.log("todo-> handleUpdateTask")
        const updatedTodo = {
            ...todo,
            task: e.target.value
        }

        updateTodo(updatedTodo)
    }

    const toggleInput = (e) => {
        e.preventDefault();
        console.log("Todo-> toggle input")
        console.log(todo)

        const updatedTodo = {
            ...todo,
            disabled: !todo.disabled,
            changeBtnLabel: todo.disabled ? "Save" : "Change"
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
        </li>
    )
}

export default Todo