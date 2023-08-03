"use client";
import React, { useState } from "react";
import { Modal } from "../Modal";
import { useQuery } from "react-query";
import { getTodos } from "@/api/todos.api";
import { ITodo } from "@/types/todos.t";
import { AddTodo } from "./AddTodo";
export const TodoHeader = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const toggleAddTask = () => setShowAddTask(!showAddTask);
  const { isLoading, data: todos } = useQuery("todos", getTodos);
  const completedTodos = (data: ITodo[]): number => {
    const completedTodos = data.filter(
      (todo) => todo.completed === true
    ).length;

    return completedTodos;
  };
  return (
    <div className="flex items-center justify-around gap-3 ">
      <div className="flex-1">
        <button onClick={toggleAddTask} className="btn btn-outline  w-full">
          Add New Task
        </button>
      </div>
      <div>
        {isLoading && <p>Loading</p>}
        {todos && (
          <div
            className={`w-full ${
              completedTodos(todos) === todos.length && "text-success"
            }`}
          >
            <p>Completed</p>
            <p className="text-center">
              <span className="text-success">{completedTodos(todos)} </span>
              of
              <span> {todos.length} </span>
            </p>
          </div>
        )}
      </div>
      <Modal showModal={showAddTask} closeModal={toggleAddTask}>
        <AddTodo closeModal={toggleAddTask} />
      </Modal>
    </div>
  );
};
