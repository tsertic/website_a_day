export interface INote {
  text: string;
  completed: boolean;
  _id: string;
}
export interface INotes {
  notes: INote[];
}
