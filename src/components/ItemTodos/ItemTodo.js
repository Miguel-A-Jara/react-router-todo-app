import React from 'react';
import UpdateTodoButton from '../TodosFolder/UpdateTodoButton';
import UpdateDate from '../UpdateDate';
import ItemTodoParagraph from './ItemTodoParagraph';
import ItemTodoTitle from './ItemTodoTitle';
import { motion } from 'framer-motion';

const ItemTodo = ({ todo }) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="bg-indigo-500/50 w-full lg:w-3/4 h-full rounded-xl p-4 lg:p-8 flex flex-wrap"
        >
            <ItemTodoTitle todo={todo} />

            <ItemTodoParagraph todo={todo} />

            <div className="w-full h-1/4 bg-black/75 flex justify-around items-center 
            rounded-b-2xl py-8">
                <UpdateTodoButton todo={todo} />
                <UpdateDate todo={todo} />
            </div>
        </motion.div>
    );
};

export default ItemTodo;
