export interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

export enum ACTION_TYPE {
  addTodo = 'add_todo',
  removeTodo = 'remove_todo',
  toggleTodo = 'toggle_todo',
  initTodo = 'init_todo',
}