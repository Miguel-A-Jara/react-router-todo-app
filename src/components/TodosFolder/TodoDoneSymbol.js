import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineFileDone } from 'react-icons/ai'; //Icons
import { BsClockFill } from 'react-icons/bs';       //Icons

const TodoDoneSymbol = ({ todo }) => {
    return (
        <>
            {
                todo.done 
                    ? <AiOutlineFileDone className={`animate__animated done-animation text-green-600`} />
                    : <BsClockFill className={`animate__animated done-animation text-red-700`} />
            
            }
        </>
    );
};

TodoDoneSymbol.propTypes = {
    todo: PropTypes.object.isRequired
};

export default TodoDoneSymbol;
