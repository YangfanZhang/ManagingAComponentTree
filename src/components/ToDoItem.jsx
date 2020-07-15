import React, { useState } from "react";

function ToDoItem(props) {
  const [isCrossed, setIsCrossed] = useState(false);
  function setCross() {
    setIsCrossed(!isCrossed);
  }
  return (
    <li
      onClick={setCross}
      style={{ textDecoration: isCrossed ? "line-through" : null }}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
