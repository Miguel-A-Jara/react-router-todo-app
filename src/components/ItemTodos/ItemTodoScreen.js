import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ItemTodo from "./ItemTodo";
import ItemTodoList from "./ItemTodoList";
import { IoMdArrowRoundBack } from "react-icons/io";

const ItemTodoScreen = () => {
    const { state } = useLocation();
    const todos = useSelector((state) => state.todos.value);

    /*  We get the 'todo' object from the useSelector (redux) so we can update its values, 
    ( the 'state' that we get from useLocation() does not update  */
    const todo = todos.find(element => element.id === state.todo.id )

    return (
        <div className="w-screen h-screen bg-stone-900 flex flex-col flex-wrap p-12">
            <div className="w-1/4 h-1/4 flex justify-center items-center">
                <Link
                    to="/"
                    className="bg-red-500 hover:bg-white text-white hover:text-red-500 px-8 py-4 rounded-3xl text-2xl font-bold 
                    flex justify-around items-center animate-pulse transition-all duration-300 hover:animate-none"
                >
                    <IoMdArrowRoundBack />
                    Back
                </Link>
            </div>
            <ItemTodoList todos={todos} />
            <ItemTodo todo={todo} /> 
        </div>
    );
};

export default ItemTodoScreen;
