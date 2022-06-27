import React, { useState } from "react";
import ManageProductForm from "../../../../components/ManageProductForm";
import { db } from "../../../../firebase-config";
import {
  collection,
  doc,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const UpdateProduct = () => {
  //states to catch category and td of product witch will be update
  const [getProduct, setGetProduct] = useState({
    id: "",
    category: "",
  });
  const [productFound, setProductFound] = useState(false);
  const [getProductErrMsg, setGetProductErrMsg] = useState("");

  // product productForm state
  const [productForm, setProductForm] = useState({
    docId: "",
    category: "",
    id: "",
    name: "",
    price: "",
    favorite: false,
    size: null,
    description: {
      material: "",
      process: "",
      size: "",
    },
    color: null,
  });

  //get from firestore product by his category and id, and put it and his firestore doc id to the state
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
        setProductForm({ ...prod, docId: Id });
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
      setProductFound(false);
    }
  };

  //upload  error and success message
  const [uploadSuccessMsg, setUploadSuccessMsg] = useState("");
  const [uploadErrorMsg, setUploadErrorMsg] = useState("");

  const [checkFormError, setCheckFormError] = useState("");

  //add rpoduct to firestore
  const updateProductToFirestore = async () => {
    if (
      productForm.category &&
      productForm.id &&
      productForm.name &&
      productForm.price &&
      productForm.favorite &&
      productForm.description.material &&
      productForm.description.process &&
      productForm.description.size &&
      productForm.size &&
      productForm.color &&
      productForm.docId
    ) {
      const productRef = doc(db, "productData", `${productForm.docId}`);
      await updateDoc(productRef, {
        category: productForm.category,
        id: productForm.id,
        name: productForm.name,
        price: productForm.price,
        favorite: productForm.favorite,
        size: productForm.size,
        color: productForm.color,
        description: productForm.description,
      })
        .then(() => {
          setProductForm({
            category: productForm.category,
            id: productForm.id,
            name: "",
            price: "",
            docId: "",
            favorite: false,
            size: null,
            description: {
              material: productForm.description.material,
              process: productForm.description.process,
              size: productForm.description.size,
            },
            color: null,
          });
          setUploadSuccessMsg("Product Updated Successfully");
          setUploadErrorMsg("");
          setTimeout(() => {
            setUploadSuccessMsg("");
          }, 5000);
        })
        .catch((error) => {
          setUploadErrorMsg("Error updating document:", error);
          setUploadSuccessMsg("");
        });

      setCheckFormError("");
    } else {
      setCheckFormError("Please complete each of the fields above");
    }
  };

  return (
    <div className="update_product">
      <h1 className="update_product_h1">Update Product</h1>
      {productFound === false ? (
        <form className="get_product_msg" onSubmit={getProductByCategoryAndId}>
          <h2>
            Please, enter the category and the id of the product you want to
            update
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
      ) : (
        <>
          <ManageProductForm
            productForm={productForm}
            setProductForm={setProductForm}
            add={false}
          />
          <button
            className="update_product_submit"
            onClick={updateProductToFirestore}
          >
            Update Product
          </button>

          {uploadSuccessMsg && (
            <div className="uploadSuccessMsg">{uploadSuccessMsg}</div>
          )}
          {uploadErrorMsg && (
            <div className="uploadErrorMsg">{uploadErrorMsg}</div>
          )}
          {checkFormError && (
            <div className="checkFormError">{checkFormError}</div>
          )}
          <button onClick={() => setProductFound(false)}>Back</button>
        </>
      )}
    </div>
  );
};

export default UpdateProduct;
