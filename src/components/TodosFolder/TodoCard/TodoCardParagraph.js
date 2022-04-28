import React from "react";

const TodoCardParagraph = ({todo}) => {
    return (
        <p className="bg-indigo-500/50 rounded-bl-lg lg:rounded-bl-2xl p-2 lg:p-8 w-3/4 border-r-2 border-white 
        font-light text-xl md:text-2xl lg:text-4xl flex flex-col justify-center lg:items-start">
            <small className="font-mono font-bold mr-4 text-xs lg:text-sm">{todo.date}</small>
            <small className="truncate w-full">{todo.todoDescri}</small>
        </p>
    );
};

export default TodoCardParagraph;
