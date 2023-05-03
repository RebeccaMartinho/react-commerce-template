import { Button } from "react-bootstrap";
import Item from "./features/Product";
import logo from "../public/rollingreen/logo.png";

function Footer() {
  return (
    <div className="col-12 d-flex flex-column justify-content-center align-items-center p-2">
      <div className="col-4 d-flex justify-content-between align-items-center">
        <div className=" d-flex align-items-start justify-content-start">
          <div className="d-flex flex-column align-items-start justify-content-start">
            <img src={logo} width={"100%"} alt="" />
          </div>
          <div className="border w-100">
            <span>Entre em Conato</span>
            <span>12 12344-1234</span>
            <span>ou por whatsapp</span>
            <span>12 12344-1234</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
