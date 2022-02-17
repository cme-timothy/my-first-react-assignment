import React from "react";
import uuid from "react-native-uuid";
import Items from "./Items";

function ItemsList(props) {
  return (
    <div>
      {props.addItem.map((title) => {
        return (
          <Items key={uuid.v4()} data={title} removeItem={props.removeItem} />
        );
      })}
    </div>
  );
}

export default ItemsList;
