export default function ItemCount({
  initial,
  onAdd,
  onSub,
  stock,
  handleCartAdd,
}) {
  return (
    <>
      <div className="d-flex">
        <button
          className="btn btn-info"
          onClick={onSub}
          disabled={initial <= 0}
        >
          -
        </button>
        <p>{initial}</p>
        <button
          className="btn btn-info"
          onClick={onAdd}
          disabled={initial >= stock}
        >
          +
        </button>
      </div>
      <div className="mt-2">
        <button className="btn btn-primary" onClick={handleCartAdd}>
          Añadir al Carrito
        </button>
      </div>
    </>
  );
}
