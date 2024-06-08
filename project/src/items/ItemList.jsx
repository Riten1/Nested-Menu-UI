import React from "react";
import EachItem from "./EachItem";

const ItemList = ({ items = [] }) => {
  return (
    <ul className="inline-block">
      {items && items.length
        ? items.map((eachitem) => <EachItem eachitem={eachitem} />)
        : null}
    </ul>
  );
};

export default ItemList;
