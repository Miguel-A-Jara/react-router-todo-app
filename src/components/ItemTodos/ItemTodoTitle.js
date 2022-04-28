import React from 'react';

const ItemTodoTitle = ({ todo }) => {
    return (
        <h1
            className={`${todo.done ? 'bg-green-500/25' : 'bg-red-500/25'}
			w-full h-1/4 flex flex-col gap-4 justify-center items-center rounded-t-2xl p-2 lg:p-4 font-light lg:font-bold text-white transition-all duration-500 text-center`}
        >
            <small className="w-full block text-lg md:text-2xl lg:text-4xl break-words">
                {todo.todoTitle}
            </small>

            {todo.done ? (
                <small className="font-sans text-xs lg:text-lg font-extralight">
                    (Completed)
                </small>
            ) : (
                <small className="font-sans text-xs lg:text-lg font-extralight">
                    (Not Completed)
                </small>
            )}
        </h1>
    );
};

export default ItemTodoTitle;
