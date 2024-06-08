import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";

const EachItem = ({ eachitem }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handlePlus(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }
  console.log(displayCurrentChildren);
  return (
    <li className="ml-[50px] cursor-pointer">
      <p
        className="hover:bg-black hover:text-white duration-300"
        onClick={() => handlePlus(eachitem.label)}
      >
        {eachitem.label}
        {eachitem && eachitem.children ? (
          <span>{displayCurrentChildren[eachitem.label] ? "-" : "+"}</span>
        ) : null}
      </p>
      {eachitem &&
      eachitem.children &&
      eachitem.children.length > 0 &&
      displayCurrentChildren[eachitem.label] ? (
        <ItemList items={eachitem.children} />
      ) : null}
    </li>
  );
};

export default EachItem;
