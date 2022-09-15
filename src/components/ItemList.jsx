import React from "react";
import { useNavigate } from "react-router-dom";
import Item from "./Item";

const ItemList = ({ items, handleCartAdd }) => {
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/item/${id}`);
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
            handleCartAdd={handleCartAdd}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
