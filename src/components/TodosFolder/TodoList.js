import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const TodoList = () => {
    const todos = useSelector((state) => state.todos.value);

    return (
        <div className="w-1/2 min-h-screen">
            <ul>
                {todos.map((todo) => <TodoCard todo={todo} />)}
            </ul>
        </div>
    );
};

export default TodoList;
