import React from 'react'
import Progress from "../../../components/Progress";
import {useNavigate} from 'react-router-dom'

const OrderCompleteCart = () => {
  const navigate = useNavigate();
  return (
    <div className="order_complete">
      <Progress shopping={true} checkout={true} complete={true} />
      OrderCompleteCart
      <button type="button" onClick={() => navigate("/private/checkout-cart")}>
        {" "}
        Back
      </button>
    </div>
  );
}

export default OrderCompleteCart