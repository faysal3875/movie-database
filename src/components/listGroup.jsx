import React, { Component } from "react";
class ListGroup extends React.Component {
  render() {
    const { items, textProperty, valueProperty, selectedItem, onItemSelect } =
      this.props;
    return (
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item[valueProperty]}
            style={{ cursor: "pointer" }}
            onClick={() => onItemSelect(item)}
            className={
              selectedItem === item
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    );
  }
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
