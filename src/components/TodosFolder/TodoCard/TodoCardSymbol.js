import React from "react";
import TodoDoneSymbol from "../TodoDoneSymbol";

const TodoCardSymbol = ({todo}) => {
    return (
        <div
            className={
                `${todo.done 
                    ? "bg-green-600/25" 
                    : "bg-red-700/25"
                } 
                w-1/4 flex justify-center items-center text-4xl rounded-tr-2xl peer-hover:bg-stone-900 transition-all duration-300 border-b-2 border-zinc-700`}
        >
            <TodoDoneSymbol todo={todo} />
        </div>
    );
};

export default TodoCardSymbol;
