interface ITodoHeader {
  todos: ITodo[];
}
import { ITodo } from "@/types/todo";
import React from "react";

export const TodoHeader: React.FC<ITodoHeader> = ({ todos }) => {
  const completedTodos = (): number => {
    return todos.filter((todo) => todo.finished === true).length;
  };
  return (
    <div className="flex justify-between items-center mb-4">
      <button className="btn btn-outline">New Todo</button>
      <p>Completed Todos: {completedTodos()}</p>
    </div>
  );
};
