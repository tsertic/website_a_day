export interface IPost {
  title: string;
  id: string;
  completed: boolean;
}
export interface IPosts {
  posts: IPost[];
}
