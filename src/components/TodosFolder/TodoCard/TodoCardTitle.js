import React from 'react'
import { Link } from 'react-router-dom'

const TodoTitle = ({todo}) => {
  return (
        <Link
            to={`/todo:${todo.id}`}
            state={{ todo }} //Passing props to router
            className={
                `${todo.done 
                    ? 'bg-green-600 hover:bg-blue-500' 
                    : 'bg-red-600 hover:bg-blue-500'} 
                w-3/4 text-center text-xl md:text-2xl lg:text-3xl font-light lg:font-bold pointer rounded-tl-2xl p-4 truncate
                cursor-pointer transition-all duration-500 peer border-r-2 border-b-2 border-white`
            }
        >
            {todo.todoTitle}
        </Link>
  )
}

export default TodoTitle
