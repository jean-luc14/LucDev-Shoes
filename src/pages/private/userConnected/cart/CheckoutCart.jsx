import React, { useState } from "react";
import Paypal from "../../../../components/Paypal";
import Progress from "../../../../components/Progress";
import { SectionTitle } from "../../../../components/Sections";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckoutCart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);

  const navigate = useNavigate();

  return (
    <>
      <SectionTitle ProductCards={cartItems} cartPage={true}>
        {"Checkout"}
      </SectionTitle>
      <div className="checkout_cart">
        <Progress shopping={true} checkout={true} />
        {/* <Paypal /> */}
        <div className="button_wrapper">
          <button type="button" onClick={() => navigate("/cart")}>
            {" "}
            Back
          </button>
          <button
            type="button"
            onClick={() => navigate("/user-connected/order-complete-cart")}
          >
            {" "}
            Go
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutCart;
