import React from 'react';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList';

const MainTodoScreen = () => {
    return (
        <div className="flex flex-col lg:flex-row bg-gradient-to-b from-slate-900 via-indigo-800 to-cyan-700">
            <TodoList />
            <TodoForm />
        </div>
    );
};

export default MainTodoScreen;
