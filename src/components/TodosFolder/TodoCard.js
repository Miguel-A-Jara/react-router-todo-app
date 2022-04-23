import React from "react";
import UpdateTodoButton from "./UpdateTodoButton";
import DeleteTodoButton from "./DeleteTodoButton";
import { Link } from "react-router-dom";

const TodoCard = ({ todo }) => {
    return (
        <li key={todo.id} className="bg-stone-800 p-4 text-white flex flex-wrap">
            <Link
                to={`/todo:${todo.id}`}
                state={{ todo }} //Passing props to router
                className="block w-full text-center text-3xl font-bold pointer bg-stone-900 rounded-t-lg p-4 cursor-pointer hover:bg-stone-600 transition-all duration-300"
            >
                {todo.todoTitle} {todo.done ? "Done" : "Not done"}
            </Link>
            <p className="truncate bg-zinc-900 rounded-bl-2xl p-12 w-3/4 border-r-2 border-zinc-700 font-light text-xl">
                {todo.todoDescri}
            </p>
            <div className="w-1/4 flex flex-col justify-around items-center bg-zinc-900 rounded-br-2xl">
                <DeleteTodoButton todo={todo} />
                <UpdateTodoButton todo={todo} />
            </div>
        </li>
    );
};

export default TodoCard;
