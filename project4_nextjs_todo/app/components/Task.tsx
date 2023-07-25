import { ITask } from "@/types/tasks";
import React from "react";

export const Task: React.FC<{ task: ITask }> = ({ task }) => {
  return (
    <tr>
      <td>{task.id}</td>
      <td>{task.task}</td>
    </tr>
  );
};
