import React, { useState } from "react";
import { db } from "../firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";

const GetProduct = ({
  setProductForm,
  setProductFound,
  updateProd,
  deleteProd,
  setDocId,
}) => {
  //states to catch category and td of product witch will be update
  const [getProduct, setGetProduct] = useState({
    id: "",
    category: "",
  });
  const [getProductErrMsg, setGetProductErrMsg] = useState("");

  /*get from firestore product by his category and id, and put it and his firestore doc id to the state if
   component is in updateProduct comp and delete him from firestore if component is in DeleteProduct comp */
  const getProductByCategoryAndId = async (e) => {
    e.preventDefault();
    if (getProduct.category && getProduct.id) {
      let q = query(
        collection(db, "productData"),
        where("category", "==", getProduct.category),
        where("id", "==", getProduct.id)
      );

      const querySnapshot = await getDocs(q);
      let prod;
      let Id;
      querySnapshot.forEach((doc) => {
        prod = doc.data();
        Id = doc.id;
      });

      if (prod) {
        if (updateProd) {
          setProductForm({ ...prod, docId: Id });
        }
        if (deleteProd) {
          setDocId(Id);
        }
        console.log(prod);
        setProductFound(true);
        setGetProductErrMsg("");
      } else {
        setGetProductErrMsg(
          "It seems that no product has this category and this identifier in the database"
        );
        setProductFound(false);
      }
    } else {
      setGetProductErrMsg("Please enter a product category and id");
    }
  };
  return (
    <div>
      <form className="get_product" onSubmit={getProductByCategoryAndId}>
        <h2>
          Please, enter the category and the id of the product you want to
          {deleteProd && " delete"}
          {updateProd && " update"}
        </h2>
        <div className="category_wrapper">
          <label>
            Product Category:
            <input
              type="text"
              value={getProduct.category}
              onChange={(e) =>
                setGetProduct({
                  ...getProduct,
                  category: e.target.value,
                })
              }
            ></input>
          </label>
        </div>
        <div className="id_wrapper">
          <label>
            Product Id:
            <input
              type="number"
              value={getProduct.id}
              onChange={(e) =>
                setGetProduct({ ...getProduct, id: e.target.value })
              }
            ></input>
            <input type="submit" value="Get Product" />
          </label>
        </div>
        {getProductErrMsg && (
          <div className="getProductErrMsg">{getProductErrMsg}</div>
        )}
      </form>
    </div>
  );
};

export default GetProduct;
