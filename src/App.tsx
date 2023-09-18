import React from "react";
import Form from "./components/Form";
import ShoppingList from "./components/ShoppingList";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-8">
      <Form />
      <ShoppingList />
    </div>
  );
}

export default App;
