import React, { useState } from "react";
import ItemCount from "./ItemCount";
import Item from "./Item";

function ItemDetail({ detail, handleCartAdd }) {
  const [item, setItem] = useState(0);

  const handleAddClick = () => {
    setItem(item + 1);
  };
  const handleSubClick = () => {
    setItem(item - 1);
  };
  return (
    <>
      <Item
        title={detail.item}
        description={detail.description}
        price={detail.price}
        pictureURL={detail.pictureURL}
      />
      <ItemCount
        initial={item}
        stock={5}
        onAdd={handleAddClick}
        onSub={handleSubClick}
        handleCartAdd={() => handleCartAdd(item)}
      />
    </>
  );
}

export default ItemDetail;
