import React, { useState } from 'react'

//child component for the form
function Form({addTodo, clearTodos}) {
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
            //could also use new Date().getTime() for unique value
            task: task,
            disabled: true, //when added to the Todolist, li will be disabled
            changeBtnLabel: "Change", 
            completed: false,
            completeBtnLabel: "Completed"
//metoden finns redan, updateTodo
        }

        //linking to parent, sending function up
        addTodo(newTodo)
        console.log("hello from new todo", newTodo)
        
        //clearing input value after sumbitting
        setTask("")
    }

    // add a clear function and send it up too todoapp
    const handleClearBtn = (e) => {
        e.preventDefault();
        clearTodos();
    } 

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={handleChange}/>
            <button>Stop slacking and add things to do!</button>
            <button onClick={handleClearBtn}>Clear</button>
        </form>
    )
}

export default Form