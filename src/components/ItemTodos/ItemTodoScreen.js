import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import ItemTodo from './ItemTodo';
import ItemTodoList from './ItemTodoList';
import { motion } from "framer-motion"
import { IoMdArrowRoundBack } from 'react-icons/io';

const ItemTodoScreen = () => {
    const { state } = useLocation();
    const todos = useSelector((state) => state.todos.value);

    /*  We get the 'todo' object from the useSelector (redux) so we can update its values, 
    ( the 'state' that we get from useLocation() does not update  */
    const todo = todos.find((element) => element.id === state.todo.id);

    return (
        <div className="w-screen min-h-screen lg:h-screen bg-gradient-to-b from-slate-900 via-indigo-800 to-cyan-700 
        flex lg:flex-col gap-4 lg:gap-0 flex-wrap p-6 lg:p-12">
            <div className="w-full lg:w-1/4 lg:h-1/4 flex justify-center items-center">
                <Link
                    to="/"
                    className="bg-gradient-to-b from-indigo-500 to-cyan-500 p-2 lg:px-8
                    text-md lg:text-5xl font-light text-white flex justify-around items-center rounded-xl hover:rounded-3xl
                    border-2 border-white shadow-lg shadow-indigo-500/50
                    transition-all duration-500"
                >
                    <IoMdArrowRoundBack className='animate-pulse'/>
                </Link>
            </div>
            <ItemTodoList todos={todos} />
            <ItemTodo todo={todo} />
        </div>
    );
};

export default ItemTodoScreen;
