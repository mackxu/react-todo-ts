import { ACTION_TYPE, ITodo } from "../typings";

type TState = {
  todos: ITodo[];
}

type TAction = {
  type: string;
  payload: ITodo | number | ITodo[];
} 

export function todoReducer(state: TState, action: TAction): TState {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.addTodo:
      return {
        ...state,
        todos: [payload as ITodo, ...state.todos]
      };
    case ACTION_TYPE.removeTodo:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload)
      };
    case ACTION_TYPE.toggleTodo:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === payload ? ({ ...todo, completed: !todo.completed }) : todo)
      };
    case ACTION_TYPE.initTodo:
      console.log(payload);
      return {
        ...state,
        todos: payload as ITodo[],
      };
    default:
      return state;
  }
}
