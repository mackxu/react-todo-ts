import React, { useReducer } from 'react';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import { todoReducer } from './store/reducer';
import { ACTION_TYPE, ITodo, ITodosState } from './typings';
import useUpdateEffect from './useUpdateEffect';

function initState(): ITodosState {
  return {
    todos: JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY) ?? '[]')
  }
}

const TODOS_STORAGE_KEY = 'todos';

const App = () => {
  // const [todos, setTodos] = useState<ITodo[]>([]);
  const [state, dispatch] = useReducer(todoReducer, null, initState);

  const addTodo = (todo: ITodo) => {
    dispatch({ type: ACTION_TYPE.addTodo, payload: todo });
  }
  const removeTodo = (id: number) => {
    dispatch({ type: ACTION_TYPE.removeTodo, payload: id });
  }
  const toggleTodo = (id: number) => {
    dispatch({ type: ACTION_TYPE.toggleTodo, payload: id });
  }

  // useEffect(() => {
  //   const todos = JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY) ?? '[]')
  //   dispatch({ type: ACTION_TYPE.initTodo, payload: todos })
  // }, []);

  // 开发环境useEffect会执行两次
  // 导致初始化时，不能展示storage展示的数据
  useUpdateEffect(() => {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(state.todos));
  }, [state.todos])

  return (
    <div className="App">
      <TodoInput addTodo={addTodo} />
      <TodoList todos={state.todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
