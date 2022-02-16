import React, { useState } from 'react'

//child component for the form
function Form({addTodo}) {
    const [task, setTask] = useState('')

    //function to setTask == what is filled in the input
    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //giving newTodo object correct attributes 
        const newTodo = {
            id: Math.random() * 1000, // had to add () otherwise it didnt work!
            task: task,
            disabled: true, //when added to the Todolist, li will be disabled
            changeBtnLabel: "Change" 
        }

        //linking to parent, sending function up
        addTodo(newTodo)
        console.log("hello from new todo", newTodo)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={handleChange}/>
            <button>Stop slacking and add things to do!</button>
        </form>
    )
}

export default Form