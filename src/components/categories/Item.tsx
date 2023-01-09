import { Apple } from "react-bootstrap-icons";
import oPlanet from "../../public/proteja-o-planeta.png";
interface ImageText {
  image: string;
}
function CategorieIcon(props: ImageText) {
  return (
    <div
      className="d-flex flex-column align-items-center gap-3 rounded m-2 bg-light"
      style={{ width: "150px" }}
    >
      <img src={require("../../public/" + props.image)} width={100} alt="" />
      <span>Lorem Ipsum is simply dummy text</span>
    </div>
  );
}

export default CategorieIcon;
