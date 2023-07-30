export interface ITodo {
  text: string;
  _id: string;
  createdAt: Date;
  finished: boolean;
}
export interface IGetAllTodosRes {
  data: ITodo[];
  message: string;
  success: boolean;
  count: number;
}

export interface IGetSingleTodoRes {
  data: ITodo;
  message: string;
  success: boolean;
}
