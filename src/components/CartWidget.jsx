import image from "../assets/shopping-cart.png";

function CartWidget({ quantity }) {
  return (
    <>
      <p>{quantity}</p>
      <img className="mx-5" src={image} alt="cart" height={50} width={50} />
    </>
  );
}

export default CartWidget;
