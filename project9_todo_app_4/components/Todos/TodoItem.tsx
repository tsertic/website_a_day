interface ITodoItem {
  todo: ITodo;
}
import { ITodo } from "@/types/todos.t";
import React from "react";
import { format } from "date-fns";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
export const TodoItem: React.FC<ITodoItem> = ({ todo }) => {
  const { task, description, due_date, id, completed } = todo;
  const formatedDate = format(new Date(due_date), "dd-MM-yyyy");
  return (
    <tr>
      <td>
        <input type="checkbox" checked={completed} className="checkbox" />
      </td>
      <td>
        <div className="mb-3 pb-1 border-b-2 border-b-primary-focus flex justify-between">
          <h4 className="  w-fit">{task}</h4>
          <time>Due: {formatedDate}</time>
        </div>
        <p>{description}</p>
      </td>
      <td className="flex justify-between mt-3 gap-2">
        <AiOutlineEdit cursor="pointer" size={20} />
        <AiOutlineDelete cursor="pointer" size={20} />
      </td>
    </tr>
  );
};
