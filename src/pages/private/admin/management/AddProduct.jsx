import React, { useState, useeffect } from "react";
import { db, storage } from "../../../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { unwrapResult } from "@reduxjs/toolkit";

const AddProduct = () => {
  // form state
  const [form, setForm] = useState({
    category: "",
    id: "",
    name: "",
    price: "",
    favorite: false,
    description: "",
  });

  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);

  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState("");
  const [progressUpload, setProgressUpload] = useState(0);

  //upload  error and success message
  const [uploadSuccessMsg, setUploadSuccessMsg] = useState("");
  const [uploadErrorMsg, setUploadErrorMsg] = useState("");

  //firebase ref
  const storage = getStorage();

  //types of image which will push to firebase storage
  const type = ["image/jpg", "image/jpeg", "image/png", "image/PNG"];

  //update image state of product
  const handleChangeImg = (e) => {
    const selectedImg = e.target.files[0];
    if (!selectedImg) return;
    if (selectedImg && type.includes(selectedImg.type)) {
      setImage(selectedImg);
      setImageError("");
    } else {
      setImage(null);
      setImageError("Please select a valid image type (png,jpeg,jpg)");
    }
  };

  //submit form
  const handleAddProducts = (e) => {
    e.preventDefault();
    if (image) {
      const imagesRef = ref(storage, `/loafers/${image.name}`);

      const uploadTask = uploadBytesResumable(imagesRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgressUpload(progress);
        },
        (err) => setUploadErrorMsg(err.message),
        () =>
          getDownloadURL(uploadTask.snapshot.ref).then((url) =>
            console.log(url)
          )
      );

      setImageError("");
    } else {
      setImageError("Please select a image to upload , (png,jpeg,jpg) ");
    }
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
          <h1>{progressUpload} %</h1>
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
