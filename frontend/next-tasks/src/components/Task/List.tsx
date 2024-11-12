/** @format */

'use client';

import { Task } from "@/types/task";
import Card from "./Card";
import { useEffect, useState } from "react";

const List = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("データの取得に失敗しました");
        }

        const data: Task[] = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error:", error);
        setError("データの取得に失敗しました");
      }
    };

    fetchTasks();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map((task) => (
        <Card key={task.id} task={task} />
      ))}
    </div>
  );
};

export default List;
