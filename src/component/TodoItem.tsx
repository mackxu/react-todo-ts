import React from 'react'
import { ITodo, ITodoActions } from '../typings';

interface ItemProps extends ITodoActions {
  todo: ITodo;
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
