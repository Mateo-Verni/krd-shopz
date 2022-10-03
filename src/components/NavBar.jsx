import { useContext } from "react";
import { Link } from "react-router-dom";
import { CreateCartContext } from "./context/CartContext";
import CartWidget from "./CartWidget";

export default function NavBar() {
  const { contextValue } = useContext(CreateCartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Kardash Kickz
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/men"}>
                Hombre
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/women"}>
                Mujer
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Promociones
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/">
                    Productos discontinuos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Cupón de descuento
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Ayuda
                  </a>
                </li>
              </ul>
            </li> */}
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
      <CartWidget
        quantity={
          contextValue.reduce((acc, val) => acc + val.quantity, 0) ||
          "Carro vacio"
        }
      />
    </nav>
  );
}
