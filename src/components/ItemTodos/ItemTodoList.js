import React from 'react';
import { NavLink } from 'react-router-dom';
import TodoDoneSymbol from '../TodosFolder/TodoDoneSymbol';

const ItemTodoList = ({ todos }) => {
    return (
        <ul className="w-1/4 h-3/4 bg-stone-900 overflow-y-auto p-8 hidden lg:flex flex-col gap-4">
            {todos.map((todo) => (
                <NavLink
                    key={todo.id}
                    to={`/todo:${todo.id}`}
                    state={{ todo }} //Passing props to router
                    className={({ isActive }) =>
                        isActive
                            ? `navlink-list active-navlink-list`
                            : `${
                                  todo.done
                                      ? 'bg-green-500/70 hover:bg-green-500 transition-all duration-500'
                                      : 'bg-red-500/70 hover:bg-red-500 transition-all duration-500'
                              } navlink-list`
                    }
                >
                    <div className="flex justify-start items-center w-full">
                        <small className="bg-white text-3xl p-1 rounded-full">
                            <TodoDoneSymbol todo={todo} />
                        </small>
                        <small className="mx-4 break truncate font-light">
                            {todo.todoTitle}
                        </small>
                    </div>
                </NavLink>
            ))}
        </ul>
    );
};

export default ItemTodoList;
