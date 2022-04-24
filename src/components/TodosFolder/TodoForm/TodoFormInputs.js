import React from "react";
import { IoIosAddCircle } from "react-icons/io"; //React Icons

const TodoFormInputs = ({ handleSubmitForm, todoForm, setTodoForm, formVal }) => {

    return (
        <>
            <form
                onSubmit={handleSubmitForm}
                className="flex flex-col justify-center items-center gap-4 h-1/2 bg-red-400/25 rounded-b-2xl p-4"
            >
                <input
                    type="text" value={todoForm.todoTitle} placeholder="Title" className="form-input lg:font-bold" maxlength="25"
                    onChange={(e) =>
                        setTodoForm({ ...todoForm, todoTitle: e.target.value })}
                />
                <textarea
                    value={todoForm.todoDescri} placeholder="Description" className="form-input text-center lg:font-bold" maxlength="200"
                    onChange={(e) =>
                        setTodoForm({ ...todoForm, todoDescri: e.target.value })}
                />
                <input
                    type="date" value={todoForm.date} className="form-input text-center"
                    onChange={(e) =>
                        setTodoForm({ ...todoForm, date: e.target.value })}
                />
                <button
                    className="bg-red-500 hover:bg-white text-white hover:text-red-500 p-2 rounded-full mx-auto block 
                    text-3xl lg:text-5xl transition-all duration-300"
                >
                    <IoIosAddCircle />
                </button>
            </form>
            {formVal && <h2 className="font-bold text-red-500 text-xl text-center">Fill the form completely</h2>}
        </>
    );
};

export default TodoFormInputs;
