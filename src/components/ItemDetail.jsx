import React from "react";

function ItemDetail({ price, description }) {
  return (
    <div>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
}

export default ItemDetail;
