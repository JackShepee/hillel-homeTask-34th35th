import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectShoppingList,
  editProduct,
  deleteProduct,
} from "../reducers/shoppingListSlice";

function ShoppingList() {
  const shoppingList = useSelector(selectShoppingList);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [editedValues, setEditedValues] = useState({ name: "", amount: "" });

  const handleEdit = (id, name, amount) => {
    setEditingId(id);
    setEditedValues({ name, amount });
  };

  const handleSave = (id) => {
    if (editedValues.name && editedValues.amount) {
      dispatch(editProduct({ id, ...editedValues }));
      setEditingId(null);
    }
  };

  return (
    <div className="m-4 p-6 bg-white rounded-md shadow-md">
      {shoppingList.length > 0 ? (
        shoppingList.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center my-2 gap-6"
          >
            {editingId === item.id ? (
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  value={editedValues.name}
                  onChange={(e) =>
                    setEditedValues({ ...editedValues, name: e.target.value })
                  }
                  className="border p-1 rounded"
                />
                <input
                  type="text"
                  value={editedValues.amount}
                  onChange={(e) =>
                    setEditedValues({ ...editedValues, amount: e.target.value })
                  }
                  className="border p-1 rounded"
                />
              </div>
            ) : (
              <div className="flex-1 font-semibold">
                {item.name} - {item.amount}
              </div>
            )}
            <div className="flex space-x-2">
              {editingId === item.id ? (
                <>
                  <button
                    onClick={() => handleSave(item.id)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleEdit(item.id, item.name, item.amount)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(deleteProduct(item.id))}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Delete
                  </button>
                </>
              )}
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
