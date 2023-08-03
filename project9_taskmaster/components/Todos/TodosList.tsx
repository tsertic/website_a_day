"use client";

import React from "react";
import { useQuery } from "react-query";
import { TodoItem } from "./TodoItem";
import { getTodos } from "@/api/todos.api";
export const TodosList = () => {
  const {
    isError,
    error,
    isLoading,
    data: todos,
  } = useQuery("todos", getTodos);

  return (
    <div className="overflow-x-auto">
      {isLoading && (
        <div className=" flex justify-center py-2 ">
          <span className="loading loading-spinner text-primary "></span>
        </div>
      )}
      {isError && (
        <div className="p-2 text-center text-error">Something went wrong</div>
      )}
      {todos && (
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Completed</th>
              <th>Task</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => {
              return <TodoItem todo={todo} />;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
