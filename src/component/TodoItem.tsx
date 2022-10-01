import React from 'react'
import { ITodo } from '../typings';

type ItemProps = {
  todo: ITodo;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoItem = ({ todo, removeTodo, toggleTodo }: ItemProps) => {
  const { completed, id } = todo;
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{todo.content}</span>
      <button onClick={() => removeTodo(id)}>删除</button>
      </div>
  )
}

export default TodoItem;
