interface ITodoListProps {
  tasks: ITask[];
}
import { ITask } from "@/types/tasks";
import React from "react";
import { Task } from "./Task";

export const TodoList: React.FC<ITodoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>id</th>
            <th>task</th>
          </tr>
        </thead>
        <tbody>
          {tasks ? (
            tasks.map((task) => {
              return <Task key={task.id} task={task} />;
            })
          ) : (
            <h1>Loading Tasks...</h1>
          )}
        </tbody>
      </table>
    </div>
  );
};
