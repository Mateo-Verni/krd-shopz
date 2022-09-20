import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Item from "./Item";
import ItemCount from "./ItemCount";

const ItemList = ({ items, handleCartAdd }) => {
  const [itemQuantity, setItemQuantity] = useState(0);
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/item/${id}`);
  };

  const handleOnAdd = () => {
    setItemQuantity(itemQuantity + 1);
  };

  const handleOnSub = (item) => {
    setItemQuantity(itemQuantity - 1);
  };

  return (
    <div className="row">
      {items.map((item) => (
        <div className="block col-2" key={item.id}>
          <Item
            cardClick={() => handleNavigation(item.id)}
            description={item.description}
            pictureURL={item.pictureURL}
            price={item.price}
            title={item.title}
          />
          <ItemCount
            handleCartAdd={() => handleCartAdd(itemQuantity)}
            initial={itemQuantity}
            stock={5}
            onAdd={handleOnAdd}
            onSub={handleOnSub}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
