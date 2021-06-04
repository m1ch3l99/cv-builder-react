import React from "react";
import { RemoveCircle } from "@material-ui/icons";
import "../../styles/UI/List.css";

const List = ({ onDeleteItem, item }) => {
  return (
    <div className="list">
      <h3 className="item__name">{item}</h3>
      <RemoveCircle
        className="item__delete"
        onClick={() => onDeleteItem(item)}
      />
    </div>
  );
};

export default List;
