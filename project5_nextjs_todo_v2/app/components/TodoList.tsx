import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
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
          <TodoItem />
        </tbody>
      </table>
    </div>
  );
};
