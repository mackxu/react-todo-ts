import React, { useState } from 'react';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import { ITodo } from './typings';

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (todo: ITodo) => {
    setTodos([ ...todos, todo ])
  }
  const removeTodo = (id: number) => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }
  const toggleTodo = (id: number) => {
    setTodos(todos => todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }))
  }

  return (
    <div className="App">
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
