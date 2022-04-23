import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todosReducer";

const TodoForm = () => {
    const dispatch = useDispatch();
    //We only pass the title and description, and we set the ID in the todoReducer
    const [todoForm, setTodoForm] = useState({
        todoTitle: "",
        todoDescri: "",
    });

    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch(addTodo(todoForm));
    };

    return (
        <div className="w-1/2 h-screen">
            <h2 className="bg-red-500 text-center text-2xl">Add New Todos</h2>
            <form onSubmit={handleSubmitForm}>
                <input
                    type="text"
                    onChange={(e) =>
                        setTodoForm({ ...todoForm, todoTitle: e.target.value })
                    }
                    className="w-full px-4"
                    placeholder="Todo Title"
                />
                <textarea
                    onChange={(e) =>
                        setTodoForm({ ...todoForm, todoDescri: e.target.value })
                    }
                    className="bg-red-500 text-white w-full"
                ></textarea>
                <button className="bg-red-500 p-2 rounded-lg mx-auto block">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default TodoForm;
