import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CreateCartContext } from "../context/CartContext";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Cart() {
  const [isLoading, setIsLoading] = useState(false);
  const { contextValue, onDelete } = useContext(CreateCartContext);

  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleBuy = async (data) => {
    setIsLoading(true);
    const colRef = collection(db, "orders");
    const objectToInsert = {
      buyer: { name: "mate", phone: 123456789, email: "asd@asd.com" },
      items: contextValue,
      date: new Date(),
      totalPrice: contextValue.reduce(
        (acc, val) => acc + val.price * val.quantity,
        0
      ),
    };

    try {
      const documentInserted = await addDoc(colRef, objectToInsert);
      alert(
        `Su orden de compra fue realizada, id: ${documentInserted._key.path.segments[1]}`
      );
    } catch (e) {
      console.log("errorrrrr =>>", e);
    }
    setIsLoading(false);
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
      Total:
      {contextValue.reduce((acc, val) => {
        return acc + val.price * val.quantity;
      }, 0)}
      <button
        className="btn btn-success d-block"
        onClick={handleBuy}
        disabled={isLoading}
      >
        Finalizar compra
      </button>
    </>
  ) : (
    <Link to={"/"}>Volver al inicio</Link>
  );
}
