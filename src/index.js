import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TodosApp from "./TodosApp";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <TodosApp />
        </BrowserRouter>
    </React.StrictMode>
);
