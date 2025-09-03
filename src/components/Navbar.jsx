import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
    const { user, logout } = useAuth();
    const { theme, ChangeTheme } = useTheme();

    return (
        <header className="border-b border-slate-200 dark:border-slate-700">
            <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
                <Link to="/dashboard" className="font-semibold">Dashboard</Link>
                <div className="flex items-center gap-3">
                    <button onClick={ChangeTheme} className="px-3 py-1 rounded text-sm border">
                        {theme === "dark" ? "Light" : "Dark"}
                    </button>
                    {!!user ? (
                        <>
                            <span className="hidden sm:inline text-sm">{user.name}</span>
                            <button onClick={logout} className="px-3 py-1 text-sm text-rose-600">Logout</button>
                        </>
                    ) : (
                        <Link to="/login" className="px-3 py-1 text-sm">Login</Link>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Navbar;
