# Task Management App

This is a simple task management app built with *Vite (React + SWC)* where user can login , switch between dark and light mode and create tasks and manage them with filters and sorters .

## Packages/Features used:
- *React Toolkit*
- *React Router*
- *Context Api*
- *Tailwind Css*

## Getting Started:

### 1. CLone & install 
```bash
git clone <url>
cd task-management
npm install
```

### 2. Run
#### Local/Development
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in browser 
#### Build
```bash
npm run build
```

### Context Api vs Redux
This project uses both **Redux toolkit** and **Context Api**, but for different purposes:
- **Context Api** is used to manage simple global states which are mutated/updated less frequently like (managing User auth - **AuthContext** and light/dark mode in theme - **ThemeContext**).
- **Redux Tookit** is used to manage the complex and more frequent/continuous mutations like for managing the tasks data , filtering and sorting them and presisting the data with localStorage.