import React, { useState } from "react";
import ManageProductForm from "../../../../components/ManageProductForm";
import GetProduct from "../../../../components/GetProduct";
import { db } from "../../../../firebase-config";
import { doc, updateDoc } from "firebase/firestore";

const UpdateProduct = () => {
  const [productFound, setProductFound] = useState(false);

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
        <GetProduct
          setProductForm={setProductForm}
          setProductFound={setProductFound}
        />
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
