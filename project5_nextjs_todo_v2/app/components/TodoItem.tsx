import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
export const TodoItem = () => {
  return (
    <tr>
      <div className="form-control">
        <label className="cursor-pointer label">
          <input
            type="checkbox"
            checked={false}
            className="checkbox checkbox-success"
          />
        </label>
      </div>
      <td className="w-full">Cy Ganderton</td>
      <td className="flex gap-3 justify-around">
        <AiOutlineEdit cursor="pointer" size={20} />
        <AiOutlineDelete cursor="pointer" size={20} />
      </td>
    </tr>
  );
};
