import React, { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Filterbar from "../components/Filterbar";
import { useSelector } from "react-redux";

const Dashboard = () => {
    const [editing, setEditing] = useState(null);
    const { isLoading } = useSelector((s) => s.tasks);

    return (
        <div className="space-y-6">
            <h1 className="text-xl font-semibold">Tasks</h1>
            <Filterbar />
            {isLoading && (
                <div className="text-center text-sm opacity-70">Saving...</div>
            )}

            <section className="space-y-4">
                <div className="border rounded-xl p-4 bg-white dark:bg-slate-800">
                    <h2 className="font-medium mb-3">Create / Edit</h2>
                    <TaskForm data={editing} onSave={() => setEditing(null)} />
                </div>
                <div className="space-y-3">
                    <TaskList />
                </div>
            </section>
        </div>
    );
}

export default Dashboard;