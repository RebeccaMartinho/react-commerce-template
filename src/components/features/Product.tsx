import React from "react";

interface ImageText {
  image: string;
  size: string;
}

function Product(props: ImageText) {
  return (
    <div
      className="container d-flex justify-content-center"
      style={{ width: "30%" }}
    >
      <figure className="card card-product-grid card-lg">
        {" "}
        <a href="#" className="img-wrap" data-abc="true">
          {" "}
          <img src="https://i.imgur.com/MPqUt62.jpg" />{" "}
        </a>
        <figcaption className="info-wrap">
          <div className="row">
            <div className="col-md-9 col-xs-9">
              {" "}
              <a href="#" className="title" data-abc="true">
                Dell Xtreme 270
              </a>{" "}
              <span className="rated">Laptops</span>{" "}
            </div>
            <div className="col-md-3 col-xs-3">
              <div className="rating text-right">
                {" "}
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                <span className="rated">Rated 4.0/5</span>{" "}
              </div>
            </div>
          </div>
        </figcaption>
        <div className="bottom-wrap-payment">
          <figcaption className="info-wrap">
            <div className="row">
              <div className="col-md-9 col-xs-9">
                {" "}
                <a href="#" className="title" data-abc="true">
                  $3,999
                </a>{" "}
                <span className="rated">VISA Platinum</span>{" "}
              </div>
              <div className="col-md-3 col-xs-3">
                <div className="rating text-right"> #### 8787 </div>
              </div>
            </div>
          </figcaption>
        </div>
        <div className="bottom-wrap">
          {" "}
          <a href="#" className="btn btn-primary float-right" data-abc="true">
            {" "}
            Buy now{" "}
          </a>
          <div className="price-wrap">
            {" "}
            <a href="#" className="btn btn-warning float-left" data-abc="true">
              {" "}
              Cancel{" "}
            </a>{" "}
          </div>
        </div>
      </figure>
    </div>
  );
}

export default Product;
