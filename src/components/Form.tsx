import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../reducers/shoppingListSlice";

const Form: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [errors, setErrors] = useState<{ name: boolean; amount: boolean }>({
    name: false,
    amount: false,
  });

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;

    if (!name) {
      setErrors((errors) => ({ ...errors, name: true }));
      valid = false;
    }

    if (!amount || isNaN(Number(amount))) {
      setErrors((errors) => ({ ...errors, amount: true }));
      valid = false;
    }

    if (valid) {
      dispatch(addProduct({ id: Date.now(), name, amount: Number(amount) }));
      setName("");
      setAmount("");
      setErrors({ name: false, amount: false });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 m-4 rounded-md shadow-md flex flex-col items-center space-y-4"
    >
      <div className="flex w-full items-center space-x-4">
        <label className="flex-1 font-bold text-gray-700">Product Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setErrors((errors) => ({ ...errors, name: false }));
          }}
          className={`flex-2 p-2 border rounded ${
            errors.name ? "border-red-500" : ""
          }`}
        />
      </div>
      <div className="flex w-full items-center space-x-4">
        <label className="flex-1 font-bold text-gray-700">Amount:</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
            setErrors((errors) => ({ ...errors, amount: false }));
          }}
          className={`flex-2 p-2 border rounded ${
            errors.amount ? "border-red-500" : ""
          }`}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:ring-2 focus:ring-blue-600"
      >
        Add Product
      </button>
    </form>
  );
}

export default Form;
