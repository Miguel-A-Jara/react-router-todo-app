import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { TodosContext } from "./TodosContext";
import MainTodoScreen from "./components/MainTodoScreen";
import ItemTodoScreen from "./components/ItemTodoScreen";

const TodosApp = () => {
    const [todos, setTodos] = useState([]);

    return (
        <>
            <TodosContext.Provider value={{todos, setTodos}}>
                <Routes>
                    <Route path="/" element={<MainTodoScreen />} />
                    <Route path="/todo:todoId" element={<ItemTodoScreen />} />
                </Routes>
            </TodosContext.Provider>
        </>
    );
};

export default TodosApp;
