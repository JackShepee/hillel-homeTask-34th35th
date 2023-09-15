import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../reducers/shoppingListSlice";

function Form() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ id: Date.now(), name, amount }));
    setName("");
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 m-4 rounded-md shadow-md"
    >
      <div>
        <label>
          Product Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="ml-2 border rounded"
          />
        </label>
      </div>
      <div className="mt-4">
        <label>
          Amount:
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="ml-2 border rounded"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Product
      </button>
    </form>
  );
}

export default Form;
