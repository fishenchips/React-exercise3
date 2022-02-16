import React, { useState } from 'react'

//child component for the form
function form() {
    const [task, setTask] = useState("")

    //function to setTask == what is filled in the input
    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //giving newTodo object correct attributes 
        const newTodo = {
            id: Math.random * 1000,
            task: task,
            disabled: true, //when added to the Todolist, li will be disabled
            changeBtnLabel: "Change" 
        }

        //linking to parent, sending function up
        addTodo(newTodo)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onSubmit={handleChange} value={}/>
            <button>Stop slacking and add things to do!</button>
        </form>
    )
}

export default form