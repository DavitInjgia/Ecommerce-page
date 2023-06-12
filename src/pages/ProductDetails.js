import React, { useState } from "react";
import ProductDetailsTemplate from "../Modules/ProductDetails/ProductDetailsTemplate";
import Header from "../genericComponents/Header/Header";
import Dropdown from "../genericComponents/Header/components/UserInfo/Cart/components/Dropdown";
import ProductsMain from "../Modules/ProductDetails/ProductsMain";
function ProductDetails() {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const handleCartButtonClick = () => {
    setIsDropDownVisible(!isDropDownVisible);
    console.log(isDropDownVisible);
  };
  const defaultObject = {
    id: 1,
    title: "Sneaker Company",
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 125,
    priceOriginal: 250,
    discount: 50,
    quantity: 0,
  };
  const [myObject, setMyObject] = useState(defaultObject);
  const [data, setData] = useState([]);

  const handleChangeQuantity = (changeType) => {
    if (changeType === '+') {
      setMyObject(prevState => ({ ...prevState, quantity: prevState.quantity + 1 }));
    } else if (changeType === '-' && myObject.quantity > 0) {
      setMyObject(prevState => ({ ...prevState, quantity: prevState.quantity - 1 }));
    }
  };
  const handleAddItem = () => {
    setData(prevState => [...prevState, myObject]);
    setMyObject(defaultObject);
  };
  // const addItem = (item) => {
  //   setData((prevData) => [...prevData, item]);
  // };

  // const removeItem = (id) => {
  //   setData((prevData) => prevData.filter((item) => item.id !== id));
  // };

  return (
    <ProductDetailsTemplate
      header={
        <div
          style={{ height: "15dvh", backgroundColor: "#FFFFFF", width: "100%" }}
        >
          <Header handleCart={handleCartButtonClick} />
          {isDropDownVisible && <Dropdown />}
        </div>
      }
      main={
        <ProductsMain myObject = {myObject} handleChangeQuantity={handleChangeQuantity} handleAddItem={handleAddItem} />
        // <div
        //   style={{ height: "85dvh", backgroundColor: "aqua", width: "100%", zIndex:"0" }}
        // ></div>
      }
    />
  );
}

export default ProductDetails;
