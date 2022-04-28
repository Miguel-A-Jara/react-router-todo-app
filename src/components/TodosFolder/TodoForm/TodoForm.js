import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../features/todosReducer';
import TodoFormInputs from './TodoFormInputs';

const TodoForm = () => {
    const dispatch = useDispatch();
    const [formVal, setFormVal] = useState(false);

    //We set the 'id' later on in the todoReducer
    const initState = { todoTitle: '', todoDescri: '', date: '' };
    const [todoForm, setTodoForm] = useState(initState);
    const { todoTitle, todoDescri, date } = todoForm;

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (
            todoTitle.trim().length < 2 ||
            todoDescri.trim().length < 2 ||
            date.trim().length < 2
        ) {
            setFormVal(true);
            return;
        } else {
            setFormVal(false);
            setTodoForm(initState);
            dispatch(addTodo(todoForm));
        }
    };

    return (
        <div className="w-full lg:w-1/2 order-1 lg:order-2 min-h-screen lg:p-4 flex items-center justify-center bg-black/70">
            <div className='w-full'>
                <h2
                    className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-center text-xl lg:text-7xl 
                    font-bold text-white px-8 py-4 mx-4 rounded-t-2xl"
                >
                    Add New Todos
                </h2>

                <TodoFormInputs
                    handleSubmitForm={handleSubmitForm}
                    todoForm={todoForm}
                    setTodoForm={setTodoForm}
                    formVal={formVal}
                />
            </div>
        </div>
    );
};

export default TodoForm;
