import React from "react";
import ProductDetailsTemplate from "../Modules/ProductDetails/ProductDetailsTemplate";
import ProductsMain from "../Modules/ProductDetails/ProductsMain";

function ProductDetails() {
  return (
    <ProductDetailsTemplate
      header={
        <div
          style={{ height: "112px", backgroundColor: "magenta", width: "100%" }}
        ></div>
      }
      main={
       <ProductsMain/>
      }
    />
  );
}

export default ProductDetails;
