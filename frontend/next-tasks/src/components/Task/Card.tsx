/** @format */

import { Task } from "@/types/task";

type CardProps = {
  task: Task;
};

const Card = ({ task }: CardProps) => {
  return (
    <div className="w-64 h-52 p-4 bg-white rounded-md shadow-md flex flex-col justify-between">
      <header>
        <h1 className="text-lg font-semibold">{task.title}</h1>
        <div className="mt-1 text-sm line-clamp-1">{task.description}</div>
      </header>
      <div>
        <div className="text-sm">{task.due_Date}</div>
        <div className="flex justify-between items-center">
          <div>
            {task.is_completed ? (
              <span className="text-green-500">完了</span>
            ) : (
              <span className="text-yellow-500">未完了</span>
            )}
          </div>
          <div className="flex gap-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
