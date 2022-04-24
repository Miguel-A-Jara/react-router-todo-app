import React from 'react'
import { Link } from 'react-router-dom'

const TodoTitle = ({todo}) => {
  return (
        <Link
            to={`/todo:${todo.id}`}
            state={{ todo }} //Passing props to router
            className={
                `${todo.done 
                    ? 'bg-green-600/25' 
                    : 'bg-red-700/25'} 
                w-3/4 text-center text-xl md:text-2xl lg:text-3xl font-light lg:font-bold pointer rounded-tl-2xl p-4 truncate
                cursor-pointer hover:bg-stone-900 transition-all duration-300 peer border-r-2 border-b-2 border-zinc-700`
            }
        >
            {todo.todoTitle}
        </Link>
  )
}

export default TodoTitle
