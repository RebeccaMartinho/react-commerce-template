import { Search } from "react-bootstrap-icons";
import oPlanet from "../../public/proteja-o-planeta.png";
import Item from "./Product";

function Features() {
  return (
    <div className="col-12 d-flex flex-column justify-content-center justify-content-md-between align-items-center">
      <div className="col-10 d-flex justify-content-between p-2 align-items-center">
        <h3>Os Melhores descontos para você</h3>
        <a href="#" style={{ textDecoration: "none", color: "red" }}>
          Ver Todos
        </a>
      </div>
      <br />
      <div className="col-10 d-flex flex-wrap justify-content-between align-items-center">
        <Item size="280px" image="features/amazon.jpeg" />
        <Item size="280px" image="features/amazon.jpeg" />
        <Item size="280px" image="features/amazon.jpeg" />
        <Item size="280px" image="features/amazon.jpeg" />
        <Item size="280px" image="features/amazon.jpeg" />
        <Item size="280px" image="features/amazon.jpeg" />
      </div>
    </div>
  );
}

export default Features;
