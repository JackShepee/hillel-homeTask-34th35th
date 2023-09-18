import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  amount: number;
}

export interface ShoppingListState {
  shoppingList: Product[];
}

const initialState: ShoppingListState = {
  shoppingList: [],
};

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.shoppingList.push(action.payload);
    },
    editProduct: (state, action: PayloadAction<Product>) => {
      const index = state.shoppingList.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.shoppingList[index] = action.payload;
      }
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.shoppingList = state.shoppingList.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addProduct, editProduct, deleteProduct } = shoppingListSlice.actions;

export const selectShoppingList = (state: { shoppingList: ShoppingListState }): Product[] => state.shoppingList.shoppingList;

export default shoppingListSlice.reducer;
