import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todosSlice = createSlice({
    name: "todos",
    initialState: { value: initialState },
    reducers: {
        addTodo: (state, action) => {
            state.value.push({
                id: new Date().getTime(),
                done: false,
                ...action.payload
            });
        },
        remTodo: (state, action) => {
            state.value = state.value.filter((todo) => todo.id !== action.payload);
        },
        completeTodo: (state, action) => {

            state.value = state.value.map(todo => (
                //If the todo's id is equal to our 'clicked' todo, we change its 'done' property.
                todo.id === action.payload.id 
                ? {...todo, done: !todo.done } 
                : todo
            ))
        }
    },
});

export const { addTodo, remTodo, completeTodo } = todosSlice.actions;

export default todosSlice.reducer;
