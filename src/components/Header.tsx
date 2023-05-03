import { useContext, useState } from "react";
import Cart from "./shoppingCart/CartSidebar";
import {
  Search,
  Bell,
  CartCheck,
  Clock,
  Person,
  ArrowUpRightCircle
} from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";
import logo from "../public/rollingreen/logo.png";

function Header() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [hover, setHover] = useState(false);

  const buttonStyle = {
    backgroundColor: hover ? "#49e549" : "transparent",
    color: hover ? "#fff" : "#49e549",
    border: `1px solid #49e549`,
    cursor: "pointer",
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img src={logo} width={100} alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Catálogo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sobre Nos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contato
              </a>
            </li>
          </ul>
          <form
            className="d-flex"
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Produtos"
              aria-label="Search"
            />
            <button
              className="btn"
              style={buttonStyle}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Pesquisar
            </button>
          </form>
          <div className="mx-2"> 
            <Cart/>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
