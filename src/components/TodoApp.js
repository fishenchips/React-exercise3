import React, { useState } from 'react'
import Form from './Form'
import TodoList from './TodoList'

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

    //function to change todos, used for move to complete as well
    const updateTodo = (updatedTodo) => {
        console.log("TodoApps' updateTodo Function")
        console.log(updatedTodo)

        //If id of the todo is the same as the one we update, we use the updated Todo, otherwise normal todo
        const updatedTodos = todos.map( todo => (
            todo.id === updatedTodo.id
                ? updatedTodo
                : todo
        ));
        console.log(updatedTodos)
        
        //update the whole list based on above
         setTodos(updatedTodos)
    }

    //function need access to hook setTodo, so either we send setTodo down or create the function here in 
    // TodoApp.js -- Function filters out the todo with id of the button that it pressed and removed it from the
    // array, then updates the Array without the deleted todo.
    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id)

        console.log(updatedTodos)

        setTodos(updatedTodos)
    }

    //function to clear the array
    const clearTodos = () => {
        setTodos([])
    }


  return (
    <div>
        <Form addTodo={addTodo} clearTodos={clearTodos}/>
        <TodoList 
            title="To Do"
            id="uncompleted-list"
            todos={todos} 
            updateTodo={updateTodo} 
            deleteTodo={deleteTodo} 
        />

        <TodoList 
            title="Completed"
            id="completed-list"
            todos={todos} 
            updateTodo={updateTodo} 
            deleteTodo={deleteTodo} 
        />


    </div>
  )
}

export default TodoApp