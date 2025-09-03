import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createTask, updateTask } from "../redux/slicer";

const initialData = { title: "", description: "", priority: "medium", status: "todo" }

const TaskForm = ({ data, onSave }) => {
    const [form_data, setFormData] = useState(initialData);
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) {
            setFormData(data);
        }
    }, [data]);

    const handleChange = (e) => {
        setFormData({ ...form_data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form_data.title.trim()) return;

        if (data) {
            dispatch(updateTask({ ...form_data, id: data.id }));
        } else {
            dispatch(createTask(form_data));
        }
        setFormData(initialData);
        onSave();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <input
                name="title"
                value={form_data.title}
                onChange={handleChange}
                placeholder="enter title..."
                className="w-full border rounded px-3 py-2"
            />
            <textarea
                name="description"
                value={form_data.description}
                onChange={handleChange}
                placeholder="enter description..."
                rows={3}
                className="w-full border rounded px-3 py-2"
            />
            <div className="flex gap-2">
                <select name="priority" value={form_data.priority} onChange={handleChange} className="border rounded px-2 py-1 bg-white text-slate-900 dark:bg-slate-800 dark:text-slate-100">
                    {["low", "medium", "high"].map((level) => (
                        <option key={level} value={level} className="capitalize">
                            {level}
                        </option>
                    ))}
                </select>
                <select name="status" value={form_data.status} onChange={handleChange} className="border rounded px-2 py- bg-white text-slate-900 dark:bg-slate-800 dark:text-slate-100">
                    {["todo", "in-progress", "done"].map((status) => (
                        <option key={status} value={status} className="capitalize">
                            {status.replace("-", " ")}
                        </option>
                    ))}
                </select>
                <button
                    type="submit"
                    className="ml-auto px-4 py-2 bg-slate-900 text-white rounded dark:bg-slate-100 dark:text-slate-900"
                >
                    Save
                </button>
            </div>
        </form>
    );
}

export default TaskForm;