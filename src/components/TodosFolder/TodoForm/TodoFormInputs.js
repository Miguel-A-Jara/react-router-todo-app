import React from "react";
import { IoIosAddCircle } from "react-icons/io"; //React Icons

const TodoFormInputs = ({ handleSubmitForm, todoForm, setTodoForm, formVal }) => {

    return (
        <>
            <form
                onSubmit={handleSubmitForm}
                className="flex flex-col justify-center items-center gap-4 h-1/2 bg-white/50 rounded-b-2xl p-4 mx-4 shadow-lg
                shadow-blue-500/40"
            >
                <label for="title" className="form-label">Title</label>
                <input
                    id="title" autoComplete="off"
                    type="text" value={todoForm.todoTitle} placeholder="Title" className="form-input lg:font-bold" maxLength="25"
                    onChange={(e) =>
                        setTodoForm({ ...todoForm, todoTitle: e.target.value })}
                />

                <label for="descri" className="form-label">Description</label>
                <textarea
                    id="descri" autoComplete="off"
                    value={todoForm.todoDescri} placeholder="Description" className="form-input text-center lg:font-bold" maxLength="200"
                    onChange={(e) =>
                        setTodoForm({ ...todoForm, todoDescri: e.target.value })}
                />

                <label for="date" className="form-label">Date</label>
                <input
                    id="date"
                    type="date" value={todoForm.date} className="form-input text-center"
                    onChange={(e) =>
                        setTodoForm({ ...todoForm, date: e.target.value })}
                />
                
                <button
                    className="bg-indigo-500 hover:bg-white text-white hover:text-indigo-500 
                    p-2 rounded-full mx-auto block text-3xl lg:text-5xl transition-all duration-500 shadow-lg shadow-indigo-500"
                >
                    <IoIosAddCircle />
                </button>
            </form>
            <h2 className={`${formVal ? 'opacity-100' : 'opacity-0' } font-bold text-red-500 text-xl text-center 
            transition-all duration-500`}
            >
                Fill the Form
            </h2>
        </>
    );
};

export default TodoFormInputs;
