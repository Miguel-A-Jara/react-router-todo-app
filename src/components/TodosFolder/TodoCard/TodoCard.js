import React from 'react';
import PropTypes from 'prop-types';
import UpdateTodoButton from '../UpdateTodoButton';
import DeleteTodoButton from '../DeleteTodoButton';
import TodoTitle from './TodoCardTitle';
import TodoCardSymbol from './TodoCardSymbol';
import TodoCardParagraph from './TodoCardParagraph';
import { motion } from 'framer-motion';

const TodoCard = ({ todo, idx }) => {
    return (
        <motion.li
            //For each card, we add the index to make the transition slower
            transition={{ duration: 0.75 + idx * 0.25 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:p-4 my-4 text-white flex flex-wrap justify-center"
        >
            <TodoTitle todo={ todo } />
            <TodoCardSymbol todo={ todo } />

            <div className="shadow-lg shadow-indigo-500/40 w-full flex flex-wrap rounded-2xl">
                <TodoCardParagraph todo={ todo } />
                <div className="w-1/4 flex flex-col gap-4 justify-around items-center bg-black/50 lg:rounded-br-2xl py-4">
                    <DeleteTodoButton todo={ todo } />
                    <UpdateTodoButton todo={ todo } />
                </div>
            </div>
        </motion.li>
    );
};

TodoCard.propTypes = {
    todo: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired
};

export default TodoCard;
