"use client";
interface ITodoHeader {
  todos: ITodo[];
}
import { ITodo } from "@/types/todo";
import React, { useState } from "react";
import { Modal } from "./Modal";
import { AddNewTodoForm } from "./AddNewTodoForm";

export const TodoHeader: React.FC<ITodoHeader> = ({ todos }) => {
  const [showAddTodoModal, setShowAddTodoModal] = useState(false);
  const completedTodos = (): number => {
    return todos.filter((todo) => todo.finished === true).length;
  };
  const handlerShowAddTodoModal = () => setShowAddTodoModal(true);
  const handlerhideAddTodoModal = () => setShowAddTodoModal(false);
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <button className="btn btn-outline" onClick={handlerShowAddTodoModal}>
          New Todo
        </button>
        <p>Completed Todos: {completedTodos()}</p>
      </div>
      <Modal showModal={showAddTodoModal} closeModal={handlerhideAddTodoModal}>
        <AddNewTodoForm closeModal={handlerhideAddTodoModal} />
      </Modal>
    </>
  );
};
