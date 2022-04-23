import React from "react";
import { useDispatch } from "react-redux";
import { remTodo } from "../../features/todosReducer";
import { FaTrash } from "react-icons/fa";

const DeleteTodoButton = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <button
            className="bg-red-700 text-2xl p-4 rounded-full hover:bg-white hover:text-red-700 transition-all duration-500"
            onClick={() => dispatch(remTodo(todo.id))}
        >
            <FaTrash />
        </button>
    );
};

export default DeleteTodoButton;
