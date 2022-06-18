import React, { useState, useEffect } from "react";
import Progress from "../../../../components/Progress";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const OrderCompleteCart = () => {
  const [totalPrice, setTotalPrice] = useState(
    useSelector((state) => state.total.value.totalPrice)
  );

  const [totalProduct, setTotalProduct] = useState(
    useSelector((state) => state.total.value.totalProduct)
  );

  const [shipping, setShipping] = useState((totalPrice * 10) / 100);
  const [tax, setTax] = useState((totalPrice * 5) / 100);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    let ttl = Number.parseFloat(totalPrice) + shipping + tax;
    setTotal(ttl.toFixed(2));
  }, []);

  return (
    <>
      <div className="order_complete">
        <Progress shopping={true} checkout={true} complete={true} />
        <h1>Order Detail</h1>
        <div className="order_complete_item red">
          <h2>Total Price : </h2>
          <div>US ${totalPrice}</div>
        </div>
        <div className="order_complete_item ">
          <h2>Total Product : </h2>
          <div>{totalProduct}</div>
        </div>
        <div className="order_complete_item red">
          <h2>Shipping : </h2>
          <div>US ${shipping.toFixed(2)}</div>
        </div>
        <div className="order_complete_item red">
          <h2>Tax : </h2>
          <div>US ${tax.toFixed(2)}</div>
        </div>
        <div className="order_complete_item">
          <h2>Payement Method : </h2>
          <div>Paypal</div>
        </div>
        <div className="order_complete_item red">
          <h2>Total : </h2>
          <div>US ${total}</div>
        </div>
        <div className="button_wrapper">
          <button
            type="button"
            onClick={() =>
              navigate("/user-connected/checkout-cart")
            }
          >
            {" "}
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderCompleteCart;
