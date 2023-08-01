"use client";
import { ITodo } from "@/types/todos";
import React from "react";
import { useQueryClient, useMutation } from "react-query";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteTodo, updateTodo } from "@/api/todos";
export const TodoItem: React.FC<{ todo: ITodo; index: number }> = ({
  todo,
  index,
}) => {
  const queryClient = useQueryClient();
  const { id, title, completed } = todo;
  const updateTodoMutation = useMutation(updateTodo, {
    onSuccess: () => queryClient.invalidateQueries("todos"),
  });
  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => queryClient.invalidateQueries("todos"),
  });
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          className="checkbox checkbox-success"
          checked={completed}
          onChange={() => {
            updateTodoMutation.mutate({ ...todo, completed: !completed });
          }}
        />
      </td>
      <td className="w-full">{title}</td>
      <td>
        <AiOutlineDelete
          size={20}
          cursor="pointer"
          className={`mx-auto ${
            index % 2 === 0 ? "hover:text-base-100" : "hover:text-primary"
          }`}
          onClick={() => {
            deleteTodoMutation.mutate(todo);
          }}
        />
      </td>
    </tr>
  );
};
