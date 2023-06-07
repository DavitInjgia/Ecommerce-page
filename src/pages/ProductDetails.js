import React, { useState } from "react";
import ProductDetailsTemplate from "../Modules/ProductDetails/ProductDetailsTemplate";
import Header from "../genericComponents/Header/Header";
import Dropdown from "../genericComponents/Header/components/UserInfo/Cart/components/Dropdown";

function ProductDetails() {

  const [isDropDownVisible, setIsDropDownVisible] = useState(false)
  const handleCartButtonClick = () => {
    setIsDropDownVisible
    (!isDropDownVisible);
    console.log(isDropDownVisible);
  };


  return (
    <ProductDetailsTemplate
      header={
        <div
          style={{ height: "15dvh", backgroundColor: "#FFFFFF", width: "100%" }}
        >
          <Header handleCart={handleCartButtonClick}/>
          {isDropDownVisible && (
        <Dropdown/>
      )}
        </div>
      }
      main={
        <div
          style={{ height: "85dvh", backgroundColor: "aqua", width: "100%", zIndex:"0" }}
        ></div>
      }
    />
  );
}

export default ProductDetails;
