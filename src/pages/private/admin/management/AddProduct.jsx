import React, { useState, useeffect } from "react";
// import { db, storage } from "../../../../firebase-config";
// import { getStorage, ref } from "firebase/storage";

const AddProduct = () => {
  // form state
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
  });

  //firebase ref
  // const storage = getStorage();
  // const imagesRef = ref(storage, "images");

  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState("");

  const [uploadSuccessMsg, setUploadSuccessMsg] = useState("");
  const [uploadErrorMsg, setUploadErrorMsg] = useState("");

  const type = ["image/jpg", "image/jpeg", "image/png", "image/PNG"];
  //update image state of product
  const handleChangeImg = (e) => {
    const selectedImg = e.target.files[0];
    if (selectedImg) {
      if (selectedImg && type.includes(selectedImg.type)) {
        setImage(selectedImg);
        setImageError("");
      } else {
        setImage(null);
        setImageError("Please select a valid image type (png,jpeg,jpg)");
      }
    } else {
    }
  };
  const handleAddProducts = (e) => {
    e.preventDefault();
    console.log(form);
    console.log(image);
  };

  return (
    <div className="add_product">
      <h1>Add Products</h1>
      {uploadSuccessMsg && (
        <>
          <div className="uploadErrorMsg">{uploadSuccessMsg}</div>
        </>
      )}
      <form onSubmit={handleAddProducts}>
        <div className="title_wrapper">
          <label id="name">Product Name</label>
          <input
            id="name"
            type="text"
            value={form.name}
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          ></input>
        </div>
        <div className="title_wrapper">
          <label id="price">Product Price</label>
          <input
            id="price"
            type="number"
            value={form.price}
            required
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          ></input>
        </div>
        <div className="title_wrapper">
          <label id="description">Product Description</label>
          <input
            id="description"
            type="text"
            value={form.description}
            required
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          ></input>
        </div>
        <div className="title_wrapper">
          <label id="image"> Upload Product Image</label>
          <input
            id="image"
            type="file"
            required
            onChange={(e) => handleChangeImg(e)}
          ></input>
          {imageError && (
            <>
              <div className="imageError">{imageError}</div>
            </>
          )}
        </div>
        <input type="submit" value="Submit"></input>
      </form>
      {uploadErrorMsg && (
        <>
          <div className="uploadErrorMsg">{uploadErrorMsg}</div>
        </>
      )}
    </div>
  );
};

export default AddProduct;
