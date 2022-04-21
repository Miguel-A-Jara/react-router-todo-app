import React from "react";
import { Link, useLocation } from "react-router-dom";
import ItemTodo from "./ItemTodo";

const ItemTodoScreen = () => {
    const {state} = useLocation();
    return (
        <div className="w-screen h-screen bg-stone-900 flex flex-wrap justify-center items-center p-20">

            <ItemTodo todo={state.todo}/>
            <Link 
                to="/"
                className="bg-white px-4 py-2 rounded-lg font-bold text-2xl"
            >
                Back!
            </Link>
        </div>
    );
};

export default ItemTodoScreen;
