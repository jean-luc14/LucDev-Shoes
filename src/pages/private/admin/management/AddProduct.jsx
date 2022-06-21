import React, { useState, useeffect } from "react";
import NewColor from "../../../../components/NewColor";
import NewSize from "../../../../components/NewSize";
import NewProductPreview from "../../../../components/NewProductPreview";
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
          color: productForm.color,
          description: productForm.description,
        });
        setProductForm({
          category: "",
          id: "",
          name: "",
          price: 0,
          favorite: false,
          size: null,
          description: {
            material: "",
            process: "",
            size: "",
          },
          color: null,
        });
        setUploadSuccessMsg("Product Added Successfully");
        setUploadErrorMsg("");
        setTimeout(() => {
          setUploadSuccessMsg("");
        }, 3000);
      } catch (err) {
        setUploadErrorMsg(err.message);
        setUploadSuccessMsg("");
      }
      setCheckFormError("");
    } else {
      setCheckFormError("Please complete each of the fields above");
    }
  };

  const updateProductDescription = (e, type) => {
    if (type === "material") {
      setProductForm({
        ...productForm,
        description: { ...productForm.description, material: e.target.value },
      });
    }
    if (type === "process") {
      setProductForm({
        ...productForm,
        description: { ...productForm.description, process: e.target.value },
      });
    }
    if (type === "size") {
      setProductForm({
        ...productForm,
        description: { ...productForm.description, size: e.target.value },
      });
    }
  };

  return (
    <>
      <h1 className="add_product_h1">Add Products</h1>
      <div className="add_product">
        <div className="add_product_child">
          <form>
            <div className="category_wrapper">
              <label>
                Product Category:
                <input
                  type="text"
                  required
                  value={productForm.category}
                  onChange={(e) =>
                    setProductForm({ ...productForm, category: e.target.value })
                  }
                ></input>
              </label>
            </div>
            <div className="id_wrapper">
              <label>
                Product Id:
                <input
                  type="number"
                  value={productForm.id}
                  required
                  onChange={(e) =>
                    setProductForm({ ...productForm, id: e.target.value })
                  }
                ></input>
              </label>
            </div>
            <div className="name_wrapper">
              <label>
                Product Name:
                <input
                  type="text"
                  value={productForm.name}
                  required
                  onChange={(e) =>
                    setProductForm({ ...productForm, name: e.target.value })
                  }
                ></input>
              </label>
            </div>
            <div className="price_wrapper">
              <label>
                Product Price:
                <input
                  type="number"
                  value={productForm.price}
                  required
                  onChange={(e) =>
                    setProductForm({ ...productForm, price: e.target.value })
                  }
                ></input>
              </label>
            </div>
            <div className="favorite_wrapper">
              <label>
                Choose a if product is a favorite:
                <select
                  value={productForm.favorite}
                  onChange={(e) =>
                    setProductForm({ ...productForm, favorite: e.target.value })
                  }
                >
                  <option value="false">False</option>
                  <option value="true">True</option>
                </select>
              </label>
            </div>
            <div className="description_wrapper">
              <label>
                Material Description:
                <textarea
                  type="text"
                  value={productForm.description.material}
                  required
                  onChange={(e) => updateProductDescription(e, "material")}
                ></textarea>
              </label>
              <label>
                Process Description:
                <textarea
                  type="text"
                  value={productForm.description.process}
                  required
                  onChange={(e) => updateProductDescription(e, "process")}
                ></textarea>
              </label>
              <label>
                Size Description:
                <textarea
                  type="text"
                  value={productForm.description.size}
                  required
                  onChange={(e) => updateProductDescription(e, "size")}
                ></textarea>
              </label>
            </div>
          </form>
          <NewSize productForm={productForm} setProductForm={setProductForm} />
          <NewColor productForm={productForm} setProductForm={setProductForm} />
        </div>
        <NewProductPreview productForm={productForm} />
      </div>
      <button className="add_product_submit" onClick={addProductToFirestore}>
        Add Product
      </button>

      {uploadSuccessMsg && (
        <div className="uploadSuccessMsg">{uploadSuccessMsg}</div>
      )}
      {uploadErrorMsg && <div className="uploadErrorMsg">{uploadErrorMsg}</div>}
      {checkFormError && <div className="checkFormError">{checkFormError}</div>}
    </>
  );
};

export default AddProduct;
