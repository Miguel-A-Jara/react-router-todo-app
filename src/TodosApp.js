import React from "react";
import { Routes, Route } from "react-router-dom";
import MainTodoScreen from "./components/TodosFolder/MainTodoScreen";
import ItemTodoScreen from "./components/ItemTodos/ItemTodoScreen"

const TodosApp = () => {
    return (
        <>
            <Routes>
                <Route path="" element={<MainTodoScreen />} />
                <Route path="todo:todoId" element={<ItemTodoScreen />} />
            </Routes>
        </>
    );
};

export default TodosApp;
