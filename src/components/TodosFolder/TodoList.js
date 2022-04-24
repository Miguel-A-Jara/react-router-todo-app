import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard/TodoCard";

const TodoList = () => {
    const todos = useSelector((state) => state.todos.value);

    return (
        <div className="w-1/2">
            <ul className="h-screen overflow-y-scroll">
                {todos.map((todo) => <TodoCard todo={todo} key={todo.id}/>)}
            </ul>
        </div>
    );
};

export default TodoList;
