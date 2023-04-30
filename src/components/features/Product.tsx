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
      <img className="" width={"80%"} src={image} />
      <div className="w-100 d-flex flex-column align-items-start justify-content-center">
        <span className="text-start p-1" data-abc="true">
          BANDEJA DE METAL G ROLLZ GRANDE DOG EINSTEIN
        </span>
        <span className="text-start p-1">Bandejas</span>
      </div>

      <div className="w-100 d-flex flex-column align-items-start justify-content-center">
        <hr className="w-100" />
        <span className="text-start p-1" data-abc="true">
          R$ 3,999
        </span>
        <span className="text-start p-1 ">Pix, Credito, Boleto Parcelado</span>
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
