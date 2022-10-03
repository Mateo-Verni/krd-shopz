import { Link } from "react-router-dom";
import image from "../assets/shopping-cart.png";

function CartWidget({ quantity }) {
  return (
    <>
      <p>{quantity}</p>
      <Link to="/cart">
        <img className="mx-5" src={image} alt="cart" height={50} width={50} />
      </Link>
    </>
  );
}

export default CartWidget;
