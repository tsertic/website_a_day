export interface ITodo {
  text: string;
  _id: string;
  finished: boolean;
  createdAt: Date;
}
export interface ITodosApiResponse {
  data: ITodo | ITodo[];
  message?: string;
  success: boolean;
  count?: number;
}
