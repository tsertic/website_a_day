export interface ITodo {
  title: string;
  userId: number;
  completed: boolean;
  id: number;
}

export interface ICreateTodo {
  title: string;
  userId: number;
  completed: boolean;
}
