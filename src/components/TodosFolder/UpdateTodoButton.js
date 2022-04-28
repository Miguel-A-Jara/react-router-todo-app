import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { completeTodo } from '../../features/todosReducer';

const UpdateTodoButton = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <button
            className={`${
                todo.done
                    ? 'bg-green-600'
                    : 'bg-red-600'
            }
                todo-status-btn`}
            //todo-status-btn is a custom css class in the 'index.css'
            onClick={() => dispatch(completeTodo(todo))}
        >
            <div className={`${
                todo.done
                    ? 'left-full translate-x-full'
                    : 'left-0 translate-x-0'
            }
                w-2/4 bg-white aspect-square rounded-full transition-all duration-500`}>
                
            </div>
        </button>
    );
};

UpdateTodoButton.propTypes = {
    todo: PropTypes.object.isRequired
};

export default UpdateTodoButton;
