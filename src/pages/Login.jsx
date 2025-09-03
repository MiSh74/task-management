import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
    const [user_data, setUserData] = useState({ name: "", pass: "" });
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserData({ ...user_data, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user_data.name.trim()) return;
        login(user_data.name.trim(), user_data.pass);
        navigate("/dashboard");
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-xl font-semibold mb-4">Login</h1>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="text"
                    name="name"
                    placeholder="enter username..."
                    value={user_data.name}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2" />
                <input
                    type="password"
                    name="pass"
                    placeholder="enter password..."
                    value={user_data.pass}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2" />
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-slate-900 text-white rounded dark:bg-slate-100 dark:text-slate-900"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;