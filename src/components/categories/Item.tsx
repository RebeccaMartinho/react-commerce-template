import { Apple } from "react-bootstrap-icons";
import oPlanet from "../../public/proteja-o-planeta.png";
import { useState } from "react";
interface ImageText {
  image: string;
  name: string;
}

function CategorieIcon(props: ImageText) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center m-2`}
      style={{ cursor: "pointer" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="d-flex justify-content-center align-items-center rounded-circle"
        style={{
          width: "100px",
          height: "100px",
          background: hover ? "#49e549" : "#f8f9fa",
        }}
      >
        <img
          src={require("../../public/" + props.image)}
          width={80}
          height={80}
          alt=""
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className="mt-3">
        <span
          style={{
            fontWeight: hover ? "bold" : "",
          }}
        >
          {props.name}
        </span>
      </div>
    </div>
  );
}

export default CategorieIcon;
