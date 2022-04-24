import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../features/todosReducer";
import TodoFormInputs from "./TodoFormInputs";

const TodoForm = () => {
    const dispatch = useDispatch();
    const [formVal, setFormVal] = useState(false);

    //We set the 'id' later on in the todoReducer
    const initState = {todoTitle: "", todoDescri: "", date: ""}
    const [todoForm, setTodoForm] = useState(initState);
    const {todoTitle, todoDescri, date} = todoForm;

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if(todoTitle.trim().length < 2 || todoDescri.trim().length < 2 || date.trim().length < 2) {

            setFormVal(true);
            return;
        } else {

            setFormVal(false);
            setTodoForm(initState);
            dispatch(addTodo(todoForm));
        }
    };

    return (
        <div className="w-full md:w-3/4 lg:w-1/2 order-1 lg:order-2 h-fit lg:min-h-screen p-4 mx-auto">
            <h2 className="bg-red-500 text-center text-xl lg:text-7xl font-bold text-white py-2 rounded-t-2xl">
                Add New Todos
            </h2>
            
            <TodoFormInputs 
                handleSubmitForm={handleSubmitForm} 
                todoForm={todoForm} 
                setTodoForm={setTodoForm} 
                formVal={formVal} 
            />
        </div>
    );
};

export default TodoForm;