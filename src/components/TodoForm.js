import React, { useState } from "react";
import { useContext } from "react";
import { TodosContext } from "../TodosContext";

const TodoForm = () => {

    const {setTodos} = useContext(TodosContext);
    const [individualTodo, setIndividualTodo] = useState({
        title: '',
        desc: '',
        done: false
    });

    const handleSubmitForm = (e) => {
        e.preventDefault();
        setTodos(todos => [...todos, {...individualTodo, id: new Date().getTime()}]);
    };

    return (
        <div className="w-1/2 h-screen">
            <h2 className="bg-red-500 text-center text-2xl">Add New Todos</h2>
            <form onSubmit={handleSubmitForm}>
                <input
                    type="text" 
                    onChange={(e) => setIndividualTodo({...individualTodo, title: e.target.value})}
                    className="w-full px-4" 
                    placeholder="Todo Title"
                />
                <textarea 
                    onChange={(e) => setIndividualTodo({...individualTodo, desc: e.target.value})}
                    className="bg-red-500 text-white w-full">
                </textarea>
                <button 
                    className="bg-red-500 p-2 rounded-lg mx-auto block">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default TodoForm;
