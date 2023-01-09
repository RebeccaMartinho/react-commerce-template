import { Search } from "react-bootstrap-icons";
import oPlanet from "../../public/proteja-o-planeta.png";
import Item from "./Item";

function Categories() {
  return (
    <div className="col-12 d-flex flex-column justify-content-center align-items-center">
      <div className="col-10 d-flex justify-content-between p-2 align-items-center">
        <h3>Categories</h3>
        <a href="/" style={{ textDecoration: "none", color: "red" }}>
          Show All
        </a>
      </div>
      <br />
      <div className="col-10 d-flex flex-wrap justify-content-center justify-content-md-between  align-items-center">
        <Item image="tela.png" />
        <Item image="chamada-telefonica.png" />
        <Item image="computador-portatil.png" />
        <Item image="video.png" />
        <Item image="pen-drive-usb.png" />
        <Item image="sazonal.png" />
        <Item image="floresta.png" />
      </div>
    </div>
  );
}

export default Categories;
