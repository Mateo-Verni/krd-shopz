import React from "react";
import Item from "./Item";

const ItemList = ({ items, handleCartAdd }) => {
  return (
    <div className="row">
      {items.map((item) => (
        <div className="block col-2">
          <Item
            key={item.id}
            description={item.description}
            pictureURL={item.pictureURL}
            price={item.price}
            title={item.title}
            handleCartAdd={handleCartAdd}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
