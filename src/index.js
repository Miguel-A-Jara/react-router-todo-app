import React from "react";
import ReactDOM from "react-dom/client";
import TodosApp from "./TodosApp";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import todosReducer from "./features/todosReducer";

const store = configureStore({
    reducer: {
        todos: todosReducer
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <TodosApp />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
