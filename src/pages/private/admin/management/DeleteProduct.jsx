import React, { useState } from "react";
import GetProduct from "../../../../components/GetProduct";
import { db } from "../../../../firebase-config";
import { doc, deleteDoc } from "firebase/firestore";

const DeleteProduct = () => {
  //upload  error and success message
  const [uploadSuccessMsg, setUploadSuccessMsg] = useState("");
  const [uploadErrorMsg, setUploadErrorMsg] = useState("");

  const [docId, setDocId] = useState("");
  const [productFound, setProductFound] = useState(false);

  //delete rpoduct to firestore
  const deleteProductFromFirestore = async () => {
    const productRef = doc(db, "productData", `${docId}`);
    await deleteDoc(productRef)
      .then(() => {
        setDocId("");
        setUploadSuccessMsg("The product has been successfully deleted");
        setUploadErrorMsg("");
        setTimeout(() => {
          setUploadSuccessMsg("");
        }, 5000);
      })
      .catch((error) => {
        setUploadErrorMsg("Error removing product:", error);
        setUploadSuccessMsg("");
      });
  };

  return (
    <div className="delete_product">
      <h1 className="delete_product_h1">Delete Product</h1>
      {productFound === false ? (
        <GetProduct
          setProductFound={setProductFound}
          deleteProd={true}
          setDocId={setDocId}
        />
      ) : (
        <>
          <h2>Are you sure you want to delete this product?</h2>
          <button
            className="delete_product_submit"
            onClick={deleteProductFromFirestore}
          >
            Delete Product
          </button>
          <button onClick={() => setProductFound(false)}>Back</button>
          {uploadSuccessMsg && (
            <div className="uploadSuccessMsg">{uploadSuccessMsg}</div>
          )}
          {uploadErrorMsg && (
            <div className="uploadErrorMsg">{uploadErrorMsg}</div>
          )}
        </>
      )}
    </div>
  );
};

export default DeleteProduct;
