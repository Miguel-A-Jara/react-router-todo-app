import React from "react";
import UpdateTodoButton from "../UpdateTodoButton";
import DeleteTodoButton from "../DeleteTodoButton";
import TodoTitle from "./TodoCardTitle";
import TodoCardSymbol from "./TodoCardSymbol";
import TodoCardParagraph from "./TodoCardParagraph";

const TodoCard = ({ todo }) => {
    return (
        <li className="p-4 my-4 text-white flex flex-wrap justify-center animate__animated animate__fadeIn">
            <TodoTitle todo={todo} />
            <TodoCardSymbol todo={todo} />

            <div className="shadow-lg shadow-indigo-500/40 w-full flex flex-wrap rounded-2xl">
                <TodoCardParagraph todo={todo} />
                <div className="w-1/4 flex flex-col gap-4 justify-around items-center bg-black/50 rounded-br-2xl py-4">
                    <DeleteTodoButton todo={todo} />
                    <UpdateTodoButton todo={todo} />
                </div>
            </div>
        </li>
    );
};

export default TodoCard;
