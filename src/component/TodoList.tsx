import React from 'react'
import { ITodo, ITodoActions, ITodosState } from '../typings';
import TodoItem from './TodoItem';

interface ListProps extends ITodoActions, ITodosState {}

const TodoList = ({ todos, removeTodo, toggleTodo } : ListProps) => {
  return (
    <div>
      {
        todos.map((todo: ITodo) => (
          <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        ))
      }
      
    </div>
    
  )
}

export default TodoList
