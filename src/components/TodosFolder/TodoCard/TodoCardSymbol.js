import React from 'react';
import PropTypes from 'prop-types';
import TodoDoneSymbol from '../TodoDoneSymbol';

const TodoCardSymbol = ({ todo }) => {
    return (
        <div
            className={`${
                todo.done
                    ? 'bg-green-600 shadow-xl shadow-green-600/60'
                    : 'bg-red-600 shadow-xl shadow-red-600/60'
            } 
                w-1/4 flex justify-center items-center text-2xl md:text-3xl lg:text-4xl lg:rounded-tr-2xl 
                peer-hover:bg-blue-500 peer-hover:shadow-blue-500 transition-all duration-500 border-b-2 border-white`}
        >
            <small className="bg-white rounded-full p-1">
                <TodoDoneSymbol todo={todo} />
            </small>
        </div>
    );
};

TodoCardSymbol.propTypes = {
    todo: PropTypes.object.isRequired
};

export default TodoCardSymbol;
