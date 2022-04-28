import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './index.css';
import TodosApp from './TodosApp';
import todosReducer from './features/todosReducer';

const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <TodosApp />
            </HashRouter>
        </Provider>
    </React.StrictMode>,
);
