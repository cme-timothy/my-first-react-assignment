import React, { useState } from "react";
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
          title: title,
        },
      ];
    });
  }

  return (
    <div className="Main">
      <h2 className="title">To-Do List</h2>

      <InputBox addTitle={addItem} />

      <ItemsList addItem={items} />
    </div>
  );
}

export default Main;
