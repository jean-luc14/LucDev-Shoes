import React, { useState, useeffect } from "react";
import ManageProductForm from "../../../../components/ManageProductForm";
import { db, storage } from "../../../../firebase-config";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

const AddProduct = () => {
  // product productForm state
  const [productForm, setProductForm] = useState({
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
  const addProductToFirestore = async () => {
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
      productForm.color
    ) {
      try {
        const docRef = await addDoc(collection(db, "productData"), {
          category: productForm.category,
          id: productForm.id,
          name: productForm.name,
          price: productForm.price,
          favorite: productForm.favorite,
          size: productForm.size,
          color: productForm.color,
          description: productForm.description,
        });
        setProductForm({
          category: productForm.category,
          id: productForm.id,
          name: "",
          price: "",
          favorite: false,
          size: null,
          description: {
            material: productForm.description.material,
            process: productForm.description.process,
            size: productForm.description.size,
          },
          color: null,
        });
        setUploadSuccessMsg("Product Added Successfully");
        setUploadErrorMsg("");
        setTimeout(() => {
          setUploadSuccessMsg("");
        }, 5000);
      } catch (err) {
        setUploadErrorMsg(err.message);
        setUploadSuccessMsg("");
      }
      setCheckFormError("");
    } else {
      setCheckFormError("Please complete each of the fields above");
    }
  };

  return (
    <div className="add_product">
      <h1 className="add_product_h1">Add Products</h1>
      <ManageProductForm
        productForm={productForm}
        setProductForm={setProductForm}
        add={true}
      />
      <button className="add_product_submit" onClick={addProductToFirestore}>
        Add Product
      </button>

      {uploadSuccessMsg && (
        <div className="uploadSuccessMsg">{uploadSuccessMsg}</div>
      )}
      {uploadErrorMsg && <div className="uploadErrorMsg">{uploadErrorMsg}</div>}
      {checkFormError && <div className="checkFormError">{checkFormError}</div>}
    </div>
  );
};

export default AddProduct;
