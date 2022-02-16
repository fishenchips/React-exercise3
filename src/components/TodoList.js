import React from 'react'
import Todo from './Todo'

function TodoList({ todos, updateTodo }) {
  return (
    <div>
        <h3>To Do List</h3>
        <ul className='uncompleted-list'>
            {
                todos.map( (todo) => <Todo key={todo.id} todo={todo} updateTodo={updateTodo} />)
            }
        </ul>
    </div>
  )
}

export default TodoList