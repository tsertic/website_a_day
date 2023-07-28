interface ITodoList {
  todos: ITodo[];
}
import React from "react";
import { TodoItem } from "./TodoItem";
import { ITodo } from "@/types/todo";

export const TodoList: React.FC<ITodoList> = ({ todos }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Todo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {todos &&
            todos.map((todo) => {
              return <TodoItem todo={todo} key={todo.id} />;
            })}
        </tbody>
      </table>
    </div>
  );
};
