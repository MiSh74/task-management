import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setSort } from "../redux/slicer";

const Filterbar = () => {
    const dispatch = useDispatch();
    const { filter, sortBy } = useSelector((state) => state.tasks);

    return (
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between mb-4">
            <div className="flex gap-2 items-center">
                <select value={filter.status} onChange={(e) => dispatch(setFilter({ status: e.target.value }))} className="border rounded px-2 py-1 bg-white text-slate-900 dark:bg-slate-800 dark:text-slate-100">
                    {["all", "todo", "in-progress", "done"].map((status) => (
                        <option key={status} value={status} className="capitalize">
                            {status === "all" ? "All Statuses" : status.replace("-", " ")}
                        </option>
                    ))}
                </select>
                <select value={filter.priority} onChange={(e) => dispatch(setFilter({ priority: e.target.value }))} className="border rounded px-2 py-1 bg-white text-slate-900 dark:bg-slate-800 dark:text-slate-100">
                    {["all", "low", "medium", "high"].map((priority) => (
                        <option key={priority} value={priority} className="capitalize">
                            {priority === "all" ? "All" : priority}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <select value={sortBy} onChange={(e) => dispatch(setSort(e.target.value))} className="border rounded px-2 py-1 bg-white text-slate-900 dark:bg-slate-800 dark:text-slate-100">
                    <option value="date">Sort by Date</option>
                    <option value="priority">Sort by Priority</option>
                </select>
            </div>
        </div>
    );
}

export default Filterbar;
