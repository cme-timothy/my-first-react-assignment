import React, { useState } from "react";
import uuid from "react-native-uuid";
import InputBox from "./InputBox";
import ItemsList from "./ItemsList";
import "./Main.css";

function Main() {
  const [items, setItems] = useState([]);

  function addItem(title) {
    setItems((prevItems) => {
      return [
        ...prevItems,
        {
          id: uuid.v4(),
          title: title,
        },
      ];
    });
  }

  function removeItem(id) {
    const newList = [...items].filter((item) => item.id !== id);
    setItems(newList);
  }

  return (
    <div className="Main">
      <h2 className="title">To-Do List</h2>
      <InputBox addTitle={addItem} />
      <ItemsList addItem={items} removeItem={removeItem} />
    </div>
  );
}

export default Main;
