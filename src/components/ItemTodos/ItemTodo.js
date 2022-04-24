import React from "react";
import UpdateTodoButton from "../TodosFolder/UpdateTodoButton";
import UpdateDate from "../UpdateDate";

const ItemTodo = ({ todo }) => {
    return (
        <div className="bg-stone-800 w-3/4 h-full rounded-xl p-8 flex flex-wrap">
            <h1 className={`w-full h-1/4 flex flex-col gap-4 justify-center items-center bg-stone-700 rounded-t-2xl 
            p-4 text-6xl font-bold text-white ${todo.done ? 'bg-green-500/25' : 'bg-red-500/25'} transition-all duration-500`}>
                {todo.todoTitle} 
                { todo.done 
                    ? <small className="font-sans text-lg font-extralight">(Completed)</small> 
                    : <small className="font-sans text-lg font-extralight">(Not Completed)</small> }
            </h1>
            <p className="w-full h-2/4 bg-gray-900/75 p-4 flex flex-col items-start text-stone-300">
                <small className="self-center font-bold text-2xl bg-slate-900 px-8 py-2 rounded-3xl">{todo.date}</small>
                <small className="text-4xl font-bold break-all mt-4">{todo.todoDescri}</small>
            </p>
            <div className="w-full h-1/4 bg-slate-900 flex justify-around items-center rounded-b-2xl">
                <UpdateTodoButton todo={todo}/>
                <UpdateDate todo={todo}/>
            </div>
        </div>
    );
};

export default ItemTodo;
