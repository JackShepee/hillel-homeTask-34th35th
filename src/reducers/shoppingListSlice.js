import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('shoppingList')) || [];

export const shoppingListSlice = createSlice({
    name: 'shoppingList',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        editProduct: (state, action) => {
            const index = state.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteProduct: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addProduct, editProduct, deleteProduct } = shoppingListSlice.actions;

export const selectShoppingList = (state) => state.shoppingList;

export default shoppingListSlice.reducer;
