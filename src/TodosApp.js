import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemTodoScreen from "./components/ItemTodoScreen";
import MainTodoScreen from "./components/TodosFolder/MainTodoScreen";

const TodosApp = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainTodoScreen />} />
                <Route path="/todo:todoId" element={<ItemTodoScreen />} />
            </Routes>
        </>
    );
};

export default TodosApp;
