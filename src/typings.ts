export interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

export interface ITodosState {
  readonly todos: readonly ITodo[];
}

export interface ITodoActions {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export enum ACTION_TYPE {
  addTodo = 'add_todo',
  removeTodo = 'remove_todo',
  toggleTodo = 'toggle_todo',
  initTodo = 'init_todo',
}