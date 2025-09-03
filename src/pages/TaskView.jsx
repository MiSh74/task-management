import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const TaskView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const task = useSelector((state) => state.tasks.tasks.find((task) => task.id === id));

    if (!task) {
        return (
            <div className="mt-6">
                <p className="mb-3">Task not found.</p>
                <button onClick={() => navigate(-1)} className="underline">
                    Go back
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-2">
            <h1 className="text-xl font-semibold">{task.title}</h1>
            <p className="opacity-80 whitespace-pre-wrap">
                {task.description || "No description"}
            </p>
            <div className="text-sm opacity-80">Priority: {task.priority}</div>
            <div className="text-sm opacity-80">Status: {task.status}</div>
            <div className="text-xs opacity-60">
                Created: {new Date(task.createdAt).toLocaleString()}
            </div>
        </div>
    );
}

export default TaskView;