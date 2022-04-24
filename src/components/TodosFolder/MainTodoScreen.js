import React from "react";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList";

const MainTodoScreen = () => {
    return (
        <div className="flex bg-stone-900">
            <TodoList />
            <TodoForm />
        </div>
    );
};

export default MainTodoScreen;
