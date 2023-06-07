import React from "react";
import ProductDetailsTemplate from "../Modules/ProductDetails/ProductDetailsTemplate";
import Header from "../genericComponents/Header/Header";

function ProductDetails() {
  return (
    <ProductDetailsTemplate
      header={
        <div
          style={{ height: "112px", backgroundColor: "magenta", width: "100%" }}
        >
          <Header/>
        </div>
      }
      main={
        <div
          style={{ height: "787px", backgroundColor: "aqua", width: "100%" }}
        ></div>
      }
    />
  );
}

export default ProductDetails;
