import React from 'react';

const ItemTodoParagraph = ({ todo }) => {
    return (
        <p className="w-full h-2/4 bg-indigo-900 p-4 flex flex-col items-start text-stone-300 overflow-y-auto">
            <small className="self-center font-light text-lg lg:text-2xl bg-gradient-to-br from-indigo-500 to-blue-500
            px-4 lg:px-8 py-2 rounded-3xl drop-shadow-lg">
                {todo.date}
            </small>
            <small className="text-lg lg:text-4xl font-light lg:font-bold break-all mt-4">
                {todo.todoDescri}
            </small>
        </p>
    );
};

export default ItemTodoParagraph;
