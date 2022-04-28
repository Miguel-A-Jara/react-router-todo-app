import React from 'react';
import PropTypes from 'prop-types';

const ItemTodoTitle = ({ todo }) => {
    return (
        <h1
            className={`${todo.done ? 'bg-green-600' : 'bg-red-600'}
			w-full h-1/6 lg:h-1/4 flex flex-col justify-center items-center rounded-t-2xl p-4 font-light lg:font-bold text-white 
            transition-all duration-500 text-center`}
        >
            <small className="w-full block text-2xl lg:text-4xl break-words">
                {todo.todoTitle}
            </small>

            <small className='font-sans text-lg font-extralight text-white/50'>
                {todo.done ? '(Completed)' : '(Not Completed)'}
            </small>
            
        </h1>
    );
};

ItemTodoTitle.propTypes = {
    todo: PropTypes.object.isRequired
};

export default ItemTodoTitle;
