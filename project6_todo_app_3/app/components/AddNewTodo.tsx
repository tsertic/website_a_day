interface IAddNewTodo {
  success: boolean;
}
import React from "react";

export const AddNewTodo: React.FC<IAddNewTodo> = ({ success }) => {
  return (
    <button className={`btn w-full btn-outline ${!success && "btn-disabled"}`}>
      Add New Todo
    </button>
  );
};
