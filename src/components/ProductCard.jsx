import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ViewProductButton from "./ViewProductButton";
import { useDispatch } from "react-redux";
import { set } from "../redux/productModal/ProductModalSlice";

const ProductCard = (props) => {
  // product id and category state
  const id = props.productProps ? props.productProps.id : undefined;
  const category = props.productProps ? props.productProps.category : undefined;
  //Navigate
  const navigate = useNavigate();
  //Dispatch
  const dispatch = useDispatch();

  //Go to product page func
  const goToProductPage = (category, id) => {
    navigate(`/category=${category}&id=${id}`);
  };

  return (
    <>
      {props.productProps && (
        <div className="product_card">
          <div
            className={`product_card_child ${
              props.newAndFavorite ? "newAndFavorite" : ""
            }`}
            onClick={() => goToProductPage(category, id)}
          >
            <img src={props.productProps.color[0].img} />
            <div className="product_card_child_name">
              {props.productProps.name}
            </div>
          </div>
          <h1 className="product_card_price">US ${props.productProps.price}</h1>
          {/* Button to show a product detail in modal with redux */}
          <ViewProductButton
            click={(e) => {
              dispatch(set({ id, category }));
              e.stopPropagation();
            }}
          />
        </div>
      )}
    </>
  );
};

export default ProductCard;
