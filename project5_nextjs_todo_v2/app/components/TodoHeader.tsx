import React from "react";

export const TodoHeader = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <button className="btn btn-outline">New Todo</button>
      <p>Completed Todos: 5</p>
    </div>
  );
};
