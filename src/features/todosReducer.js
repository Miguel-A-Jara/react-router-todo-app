import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.length === 0 ? [] : JSON.parse(localStorage.getItem('todos'));

export const todosSlice = createSlice({
    name: "todos",
    initialState: { value: initialState },
    reducers: {
        addTodo: (state, action) => {
            state.value.unshift({
                id: new Date().getTime(),
                done: false,
                ...action.payload
            });
            
            window.localStorage.setItem('todos', JSON.stringify(state.value));
        },
        remTodo: (state, action) => {
            state.value = state.value.filter((todo) => todo.id !== action.payload);
            window.localStorage.setItem('todos', JSON.stringify(state.value));
        },
        updateDate: (state, action) => {
            
            state.value = state.value.map(todo => (    
                todo.id === action.payload.id
                ? {...todo, date: action.payload.date } 
                : todo
                ))
                window.localStorage.setItem('todos', JSON.stringify(state.value));
        },
        completeTodo: (state, action) => {

            state.value = state.value.map(todo => (
                //If the todo's id is equal to our 'clicked' todo, we change its 'done' property.
                todo.id === action.payload.id 
                ? {...todo, done: !todo.done } 
                : todo
                ))
                window.localStorage.setItem('todos', JSON.stringify(state.value));
        }
    },
});

export const { addTodo, remTodo, updateDate, completeTodo } = todosSlice.actions;
export default todosSlice.reducer;
