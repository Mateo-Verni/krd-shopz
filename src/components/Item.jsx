import { useState } from "react";
import ItemCount from "./ItemCount";

export default function Item({
  title,
  description,
  price,
  pictureURL,
  handleCartAdd,
}) {
  const [item, setItem] = useState(0);
  return (
    <div className="my-5">
      <div className="card">
        <img width={180} height={180} src={pictureURL} alt={description} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{price}</p>
        </div>
      </div>
      {/* () => {} */}
      <ItemCount
        handleCartAdd={() => handleCartAdd(item)}
        initial={item}
        stock={5}
        onAdd={() => setItem(item + 1)}
        onSub={() => setItem(item - 1)}
      />
    </div>
  );
}
