import React from "react";
import ProductDetailsTemplate from "../Modules/ProductDetails/ProductDetailsTemplate";
<<<<<<< HEAD
import ProductsMain from "../Modules/ProductDetails/ProductsMain";
=======
import Header from "../genericComponents/Header/Header";
>>>>>>> 00266e78368230ba18bdd0d3718c8235a7c6fac4

function ProductDetails() {
  return (
    <ProductDetailsTemplate
      header={
        <div
          style={{ height: "112px", backgroundColor: "magenta", width: "100%" }}
<<<<<<< HEAD
        ></div>
      }
      main={
       <ProductsMain/>
=======
        >
          <Header/>
        </div>
      }
      main={
        <div
          style={{ height: "787px", backgroundColor: "aqua", width: "100%" }}
        ></div>
>>>>>>> 00266e78368230ba18bdd0d3718c8235a7c6fac4
      }
    />
  );
}

export default ProductDetails;
