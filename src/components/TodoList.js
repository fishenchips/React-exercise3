import React from 'react'
import Todo from './Todo'

function TodoList({todos, updateTodo, deleteTodo, title, id}) {
  return (
    <div>
        <h3>{title}</h3>
        <ul id={id}>
          {//map thru todos and send down props to child component
            // conditional rendering - all uncompleted in one list and all completed in another
            todos.map( (todo) => {
              if (id === "uncompleted-list" && todo.completed === false) {
                return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
              } else if (id === "completed-list" && todo.completed === true) {
                return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
              }
            })
          }
        </ul>
    </div>
  )
}

export default TodoList