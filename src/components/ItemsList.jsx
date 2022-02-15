import React from "react";
import Items from "./Items";

function ItemsList(props) {
  return (
    <div>
      {props.addItem.map((title) => {
        return <Items data={title} />;
      })}
    </div>
  );
}

export default ItemsList;
