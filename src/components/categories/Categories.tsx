import { Search } from "react-bootstrap-icons";
import oPlanet from "../../public/proteja-o-planeta.png";
import Item from "./Item";

import CATEGORIES from "./categories.json";

function Categories() {
  return (
    <div className="col-12 d-flex flex-column justify-content-center align-items-center">
      <div className="col-10 d-flex justify-content-between p-2 align-items-center">
        <h3>Categorias</h3>
        <a href="#" style={{ textDecoration: "none", color: "red" }}>
          Ver Todas
        </a>
      </div>
      <br />
      <div className="col-10 d-flex flex-wrap justify-content-center justify-content-md-between  align-items-center">
        {CATEGORIES.map((e: { image: string; name: string }) => {
          return <Item key={e.name} image={e.image} name={e.name} />;
        })}
      </div>
    </div>
  );
}

export default Categories;
