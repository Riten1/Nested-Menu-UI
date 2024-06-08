import React from "react";
import ItemList from "./ItemList";

const EachItem = ({ eachitem }) => {
  return (
    <div>
      <p>{eachitem.label}
        {
          eachitem && eachitem.children ? (
            <span>+</span>
          ) : null
        }
      </p>
      {
        eachitem && eachitem.children && eachitem.children.length > 0?
        (
          <ItemList items = {eachitem.children} />
        )
        : null
      }
    </div>
  );
};

export default EachItem;
