import React from 'react'
import { ITodo } from '../typings';
import TodoItem from './TodoItem';

type ListProps = {
  todos: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

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
