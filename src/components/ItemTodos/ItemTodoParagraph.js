import React from 'react';
import PropTypes from 'prop-types';

const ItemTodoParagraph = ({ todo }) => {
    return (
        <p className="w-full h-2/4 bg-indigo-900 p-4 flex flex-col items-start text-stone-300">
            <small className="self-center font-light text-lg lg:text-2xl bg-gradient-to-br from-indigo-500 to-blue-500
            p-2 lg:px-8 rounded-3xl drop-shadow-lg">
                {todo.date}
            </small>
            <small className="lg:h-full text-lg lg:text-4xl font-light lg:font-bold break-all mt-4 overflow-y-auto">
                {todo.todoDescri}
            </small>
        </p>
    );
};

ItemTodoParagraph.propTypes = {
    todo: PropTypes.object.isRequired
};

export default ItemTodoParagraph;
