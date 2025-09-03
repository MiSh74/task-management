import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-6">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
