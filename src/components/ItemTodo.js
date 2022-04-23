import React from "react";

const ItemTodo = ({ todo }) => {
    return (
        <div className="bg-stone-800 w-full h-3/4 rounded-xl p-8 flex flex-wrap">
            <h1 className="w-full h-1/4 flex justify-center items-center bg-stone-700 rounded-lg p-4 text-3xl font-bold text-white">
                {todo.title}
            </h1>
            <p className="w-full h-3/4 bg-stone-700 mt-4 rounded-lg p-4 text-justify text-xl font-bold text-stone-300 font-mono">
                {todo.desc}
            </p>
        </div>
    );
};

export default ItemTodo;
