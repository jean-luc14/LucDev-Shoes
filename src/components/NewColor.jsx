import React, { useState } from "react";
import { db, storage } from "../firebase-config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const NewColor = ({ productForm, setProductForm, category }) => {
  const [newColor, setNewColor] = useState({
    name: "",
    img: null,
  });

  const [imageError, setImageError] = useState("");
  const [progressUpload, setProgressUpload] = useState(0);
  const [uploadErrorMsg, setUploadErrorMsg] = useState("");

  //types of image which will push to firebase storage
  const type = ["image/jpg", "image/jpeg", "image/png", "image/PNG"];

  //update image state of product
  const handleChangeImg = (e) => {
    const selectedImg = e.target.files[0];
    if (!selectedImg) return;
    if (selectedImg && type.includes(selectedImg.type)) {
      setNewColor({ ...newColor, img: selectedImg });
      setImageError("");
    } else {
      setNewColor(null);
      setImageError("Please select a valid image type (png,jpeg,jpg)");
    }
  };

  //Add new color to color list of new product
  const addNewColor = (url) => {
    const newClr = {
      ...newColor,
      img: url,
    };

    if (productForm.color) {
      setProductForm({ ...productForm, color: [...productForm.color, newClr] });
    } else {
      setProductForm({ ...productForm, color: [newClr] });
    }
    setNewColor({
      name: "",
      img: null,
    });
  };

  //register image in cloud Storage and get her url
  const sendImageToCloudStorage = () => {
    if (category.length > 0) {
      if (newColor.img && newColor.name) {
        const imagesRef = ref(storage, `/${category}/${newColor.img.name}`);
        const uploadTask = uploadBytesResumable(imagesRef, newColor.img);
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
              addNewColor(url)
            )
        );

        setImageError("");
      } else {
        setImageError(
          "Please give a name to a new product color which you want to add to color list"
        );
      }
    } else {
      setImageError(
        "Please you must define a product category before defining a color. it will be used in the image reference."
      );
    }
  };

  return (
    <div>
      <div>
        <div className="new_color_wrapper">
          <h3>Add new color:</h3>
          <label>
            Color Name:
            <input
              type="text"
              required
              value={newColor.name}
              onChange={(e) =>
                setNewColor({ ...newColor, name: e.target.value })
              }
            ></input>
          </label>
          <label>
            {" "}
            Color Image:
            <input
              type="file"
              required
              onChange={(e) => handleChangeImg(e)}
            ></input>
          </label>
          <button onClick={sendImageToCloudStorage}>Add New Color</button>
          <h1>{progressUpload} %</h1>
          {imageError && <div className="imageError">{imageError}</div>}
          {uploadErrorMsg && (
            <div className="uploadErrorMsg">{uploadErrorMsg}</div>
          )}
        </div>
      </div>
      <div className="color_list">
        {productForm.color &&
          productForm.color.map((item, index) => (
            <div className="item">
              <div key={index}>{item.name}</div>
              <div className="item_img">
                <img src={item.img} alt={item.name} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewColor;
