import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import shoppingListReducer from './reducers/shoppingListSlice';
import App from './App';
import './index.css';
import './tailwind.css';

const store = configureStore({
    reducer: {
        shoppingList: shoppingListReducer,
    },
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

