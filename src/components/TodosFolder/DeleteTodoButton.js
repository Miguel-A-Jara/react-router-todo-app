import React from "react";
import { useDispatch } from "react-redux";
import { remTodo } from "../../features/todosReducer";
import { FaTrash } from "react-icons/fa";

const DeleteTodoButton = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <button
            className="bg-red-600 text-xl md:text-2xl p-2 lg:p-4 rounded-full hover:bg-white hover:text-red-600 
            transition-all duration-500"
            onClick={() => dispatch(remTodo(todo.id))}
        >
            <FaTrash />
        </button>
    );
};

export default DeleteTodoButton;
