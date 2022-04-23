import React from "react";
import { useDispatch } from "react-redux";
import { completeTodo } from "../../features/todosReducer";

const UpdateTodoButton = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <button
            className={`${
                todo.done
                    ? "bg-green-600 before:translate-x-[130%]"
                    : "bg-red-700 before:translate-x-[-15%]"
            }
                todo-status-btn`}
            //todo-status-btn is a custom css class in the 'index.css'
            onClick={() => dispatch(completeTodo(todo))}
        ></button>
    );
};

export default UpdateTodoButton;
