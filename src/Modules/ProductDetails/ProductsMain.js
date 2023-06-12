import React from "react";
import SliderModal from "./SliderModal/SliderModal";
import "./ProductsMail.css";
import ProductInfo from "./ProductDetailsMain/components/ProductInfo/ProductInfo";
function ProductsMain(props) {
  return (
    <div className="products-main-container">
      <SliderModal />
      <ProductInfo
        myObject={props.myObject}
        data={props.data}
        handleChangeQuantity={props.handleChangeQuantity}
        handleAddItem={props.handleAddItem}
      />
    </div>
  );
}

export default ProductsMain;
