import React from "react";
import { AiOutlineFileDone } from "react-icons/ai"
import { BsClockFill } from "react-icons/bs";

const TodoDoneSymbol = ({ todo }) => {
    return (
        <>
            {
                todo.done 
            ? <AiOutlineFileDone className={`animate__animated done-animation text-green-600`} />
            : <BsClockFill className={`animate__animated done-animation text-red-700`} />
            
            }
        </>
    );
};

export default TodoDoneSymbol;
