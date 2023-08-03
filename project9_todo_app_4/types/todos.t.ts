export interface ITodo {
  id: number;
  task: string;
  description: string;
  completed: boolean;
  due_date: Date;
}

export interface ITodoCreateNew {
  task: string;
  description: string;
  completed: boolean;
  due_date: Date;
}
