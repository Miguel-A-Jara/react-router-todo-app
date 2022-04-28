import React from 'react';
import UpdateTodoButton from '../TodosFolder/UpdateTodoButton';
import UpdateDate from '../UpdateDate';
import ItemTodoParagraph from './ItemTodoParagraph';
import ItemTodoTitle from './ItemTodoTitle';

const ItemTodo = ({ todo }) => {
    return (
        <div className="bg-stone-800 w-full lg:w-3/4 h-full rounded-xl p-4 lg:p-8 flex flex-wrap">
            <ItemTodoTitle todo={todo} />

            <ItemTodoParagraph todo={todo} />

            <div className="w-full h-1/4 bg-slate-900 flex justify-around items-center rounded-b-2xl py-8">
                <UpdateTodoButton todo={todo} />
                <UpdateDate todo={todo} />
            </div>
        </div>
    );
};

export default ItemTodo;
