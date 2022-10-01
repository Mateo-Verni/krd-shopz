import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CreateCartContext } from "../context/CartContext";

export default function Cart() {
  const { contextValue, onDelete } = useContext(CreateCartContext);

  const handleDelete = (id) => {
    onDelete(id);
  };

  return contextValue.length ? (
    <>
      {contextValue.map((elemento) => (
        <div className="my-5" key={elemento.id}>
          <div className="card">
            <img
              width={180}
              height={180}
              src={elemento.pictureURL}
              alt={elemento.description}
            />
            <div className="card-body">
              <h5 className="card-title">{elemento.title}</h5>
              <p className="card-text">{elemento.description}</p>
              <p className="card-text">Cantidad: {elemento.quantity}</p>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(elemento.id)}
              >
                Borrar
              </button>
              <p className="card-text">{elemento.quantity * elemento.price}</p>
            </div>
          </div>
        </div>
      ))}
      <>
        Total:
        {contextValue.reduce((acc, val) => {
          return acc + val.price * val.quantity;
        }, 0)}
      </>
    </>
  ) : (
    <Link to={"/"}>Volver al inicio</Link>
  );
}
