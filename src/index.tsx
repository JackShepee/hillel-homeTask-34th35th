import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import shoppingListReducer, {
  ShoppingListState,
} from "./reducers/shoppingListSlice";
import App from "./App";
import "./index.css";
import "./tailwind.css";

interface RootState {
  shoppingList: ShoppingListState;
}

const preloadedState = {
  shoppingList: JSON.parse(localStorage.getItem('shoppingList') || '{}'),
};

const store = configureStore({
  reducer: {
    shoppingList: shoppingListReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  localStorage.setItem(
    "shoppingList",
    JSON.stringify((store.getState() as RootState).shoppingList)
  );
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
