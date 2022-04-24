import React from "react";

const TodoCardParagraph = ({todo}) => {
    return (
        <p className="truncate bg-zinc-900 rounded-bl-2xl p-12 w-3/4 border-r-2 border-zinc-700 font-light text-2xl 
        flex flex-col items-start">
            <small className="font-mono font-bold mr-4 text-sm">{todo.date}</small>
            {todo.todoDescri}
        </p>
    );
};

export default TodoCardParagraph;
