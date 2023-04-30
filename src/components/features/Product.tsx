import React from "react";

import image from "../../public/rollingreen/popi.jpeg";
interface ImageText {
  image: string;
  size: string;
}

function Product(props: ImageText) {
  return (
    <div
      className="card d-flex flex-column align-items-center justify-content-center "
      style={{ width: "22%" }}
    >
      <img className="m-2" width={"80%"} src={image} />
      <div className="w-100 d-flex flex-column align-items-start justify-content-center">
        <span
          style={{ fontSize: "14px" }}
          className="fw-bold text-start p-1"
          data-abc="true"
        >
          BANDEJA DE METAL G ROLLZ GRANDE DOG EINSTEIN
        </span>
        <small
          style={{ fontSize: "10px" }}
          className="text-start text-muted p-1"
        >
          Bandejas
        </small>
      </div>

      <div className="w-100 d-flex flex-column align-items-start justify-content-center">
        <hr className="w-100" />
        <span
          className=" fw-bold text-start p-1"
          style={{ fontSize: "14px" }}
          data-abc="true"
        >
          R$ 3,999
        </span>
        <small
          style={{ fontSize: "10px" }}
          className="text-start text-muted p-1 "
        >
          Pix, Credito, Boleto Parcelado
        </small>
        <hr className="w-100" />
      </div>
      <div className="w-100 d-flex align-items-center justify-content-center mb-3">
        <button className="btn btn-primary float-right" data-abc="true">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

export default Product;
