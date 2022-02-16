import React, { useState } from 'react'
import Todo from './Todo'
import Form from './Form'


function TodoApp() {
    //create hook for todos, with useState, to an empty array
    const [todos, setTodos] = useState([])
    
    //function to add new todos from input into a new array
    const addTodo = (newTodo) => {
        setTodos([
            ...todos,
            newTodo
        ])
    }


  return (
    <div>
        <Form />
        <Todo />
    </div>
  )
}

export default TodoApp