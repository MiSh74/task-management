import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeStatus, deleteTask } from "../redux/slicer";

const priorities = { high: 3, medium: 2, low: 1 };

const TaskList = () => {

    const dispatch = useDispatch();

    const { tasks, filter, sortBy } = useSelector((state) => state.tasks);

    const filtered_data = useMemo(() => {
        let list = tasks;
        if (filter.status !== "all") {
            list = list.filter((task) => task.status === filter.status);
        }
        if (filter.priority !== "all") {
            list = list.filter((task) => task.priority === filter.priority);
        }
        if (sortBy === "date") {
            return [...list].sort((a, b) => b.createdAt - a.createdAt);
        }
        if (sortBy === "priority") {
            return [...list].sort((a, b) => priorities[b.priority] - priorities[a.priority]);
        }
        return list;
    }, [tasks, filter, sortBy]);

    if (!filtered_data.length) {
        return <p className="opacity-70">No tasks found.</p>;
    }

    return (
        <div className="grid sm:grid-cols-3 gap-3">
            {filtered_data.map((item) => (
                <div className="border rounded-lg p-3 bg-white dark:bg-slate-800" key={item.id}>
                    <div className="flex items-start justify-between">
                        <div>
                            <Link to={`/task/${item.id}`} className="font-medium hover:underline">
                                {item.title}
                            </Link>
                            <p className="text-sm opacity-80 mt-1 line-clamp-2">
                                {item.description || "No description"}
                            </p>
                            <div className="mt-2 flex items-center gap-2">
                                <select
                                    value={item.status}
                                    onChange={(e) => dispatch(changeStatus({ id: item.id, status: e.target.value }))}
                                    className="text-xs border rounded px-1.5 py-0.5 bg-white text-slate-900 dark:bg-slate-800 dark:text-slate-100"
                                >
                                    {["todo", "in-progress", "done"].map((status) => (
                                        <option key={status} value={status} className="capitalize">
                                            {status.replace("-", " ")}
                                        </option>
                                    ))}
                                </select>
                                <span className="text-xs border px-1.5 py-0.5 rounded">{item.priority}</span>
                            </div>
                        </div>
                        <div className="flex">
                            <button onClick={() => dispatch(deleteTask(item.id))} className="text-sm underline text-rose-600">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TaskList;