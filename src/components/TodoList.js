import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TodosContext } from "../TodosContext";

const TodoList = () => {
    const { todos } = useContext(TodosContext);

    return (
        <div className="w-1/2 h-screen">
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="bg-stone-800 p-4 text-white">
                        <Link
                            to={`/todo:${todo.id}`}
                            state={{ todo }}
                            className=" block text-center text-3xl font-bold pointer bg-stone-900 rounded-t-lg p-4 cursor-pointer hover:bg-stone-600 transition-all duration-300"
                        >
                            {todo.title} 
                        </Link>
                        <p className="capitalize break-words bg-stone-900 rounded-b-lg p-4">
                            {todo.desc}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
