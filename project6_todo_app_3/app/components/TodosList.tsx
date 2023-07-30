interface ITodosList {
  todos: ITodo[];
}
import { ITodo } from "@/types/todos";
import React from "react";
import { TodoItem } from "./TodoItem";

export const TodosList: React.FC<ITodosList> = ({ todos }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-zebra ">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Todo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, i) => {
            return <TodoItem i={i + 1} todo={todo} key={todo._id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
