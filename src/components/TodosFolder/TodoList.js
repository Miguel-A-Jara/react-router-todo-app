import React from 'react';
import { useSelector } from 'react-redux';
import TodoCard from './TodoCard/TodoCard';

const TodoList = () => {
    const todos = useSelector((state) => state.todos.value);

    return (
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <ul className="h-screen overflow-y-scroll">
                {
                    todos.map((todo, idx) => (
                        <TodoCard todo={todo} idx={idx} key={todo.id} />
                    ))
                }
            </ul>
        </div>
    );
};

export default TodoList;
