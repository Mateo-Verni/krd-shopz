import { useState } from "react";
import ItemCount from "./ItemCount";
import { useLocation } from "react-router-dom";

export default function Item({
  title,
  description,
  price,
  pictureURL,
  cardClick,
}) {
  const location = useLocation();

  return (
    <div className="my-5">
      <div className="card">
        <img width={180} height={180} src={pictureURL} alt={description} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          {!location.pathname.includes("item") && (
            <button className="btn btn-primary" onClick={cardClick}>
              Ver Detalle
            </button>
          )}
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
