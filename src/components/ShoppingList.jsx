import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectShoppingList,
  editProduct,
  deleteProduct,
} from "../reducers/shoppingListSlice";

function ShoppingList() {
  const shoppingList = useSelector(selectShoppingList);
  const dispatch = useDispatch();

  return (
    <div className="m-4 p-6 bg-white rounded-md shadow-md">
      {shoppingList.length > 0 ? (
        shoppingList.map((item) => (
          <div key={item.id} className="flex justify-between items-center my-2">
            <div>
              {item.name} - {item.amount}
            </div>
            <div>
              <button
                onClick={() => {
                  const newName = prompt("Edit product name:", item.name);
                  const newAmount = prompt("Edit amount:", item.amount);
                  if (newName && newAmount) {
                    dispatch(
                      editProduct({
                        id: item.id,
                        name: newName,
                        amount: newAmount,
                      })
                    );
                  }
                }}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteProduct(item.id))}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>No products in the list</div>
      )}
    </div>
  );
}

export default ShoppingList;
