"use client";
import React from "react";
import { TodoItem } from "./TodoItem";
import { useQuery } from "react-query";
import { getTodos } from "@/api/todos";
export const TodoList = () => {
  const {
    isLoading,
    isError,
    error,
    data: todos,
  } = useQuery("todos", getTodos);

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isError) {
    content = (
      <div>
        <p>Something went wrong</p>
      </div>
    );
  } else {
    if (!todos) return;
    content = (
      <>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Finished</th>
                <th>Task</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {todos.map((todo, i) => {
                return <TodoItem key={todo.id} index={i} todo={todo} />;
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }

  return <div>{content}</div>;
};
