import React, { useState } from "react";
import "./Items.css";
import bin from "../assets/bin.svg";
import checkmark from "../assets/checkmark.svg";
import empty from "../assets/empty.svg";

function Items(props) {
  const [active, setActive] = useState("false");

  function handleRemoveItem() {
    const id = props.data.id;
    props.removeItem(id);
  }

  function toggleCheckmark() {
    setActive(!active);
  }

  return (
    <div className="ItemsList">
      <button className="checkbox">
        <img
          onClick={toggleCheckmark}
          className={"checkmarkPic"}
          src={active ? `${empty}` : `${checkmark}`}
          alt=""
        />
      </button>
      <li className="item">{props.data.title}</li>
      <button className="deleteButton" onClick={handleRemoveItem}>
        <img className="binPic" src={bin} alt="" />
      </button>
    </div>
  );
}

export default Items;
