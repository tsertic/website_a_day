export interface IStore {
  id: string;
  name: string;
  items: IItems[];
  tint: number;
}
export interface IItems {
  id: string;
  name: string;
}
