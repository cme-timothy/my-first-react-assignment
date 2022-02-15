import React from "react";
import "./Items.css";
import bin from "../assets/bin.svg";
import checkmark from "../assets/checkmark.svg";

function Items(props) {
  return (
    <div className="ItemsList">
      <button className="checkbox">
        <img className="checkmarkPic" src={checkmark} alt="" />
      </button>
      <li className="item">{props.data.title}</li>
      <button className="deleteButton">
        <img className="binPic" src={bin} alt="" />
      </button>
    </div>
  );
}

export default Items;
