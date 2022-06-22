import React, { useState, useRef } from "react";
import { db, storage } from "../firebase-config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const NewColor = ({ productForm, setProductForm }) => {
  const newColorRef = useRef();
  const [newColor, setNewColor] = useState({
    name: "",
    img: null,
  });

  const [colorError, setColorError] = useState("");
  const [progressUpload, setProgressUpload] = useState(0);
  const [uploadErrorMsg, setUploadErrorMsg] = useState("");

  //types of image which will push to firebase storage
  const type = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "image/PNG",
    "image/webp",
  ];

  //update image state of product
  const handleChangeImg = (e) => {
    const selectedImg = e.target.files[0];
    if (!selectedImg) return;
    if (selectedImg && type.includes(selectedImg.type)) {
      setNewColor({ ...newColor, img: selectedImg });
      setColorError("");
    } else {
      newColorRef.current.value = "";
      setColorError("Please select a valid image type (png,jpeg,jpg)");
    }
  };

  //Add new color to color list of new product
  const addNewColor = (url) => {
    const newClr = {
      ...newColor,
      img: url,
    };
    //if product.color is already array, push newClr; if not, define newClr as productForm.color
    if (productForm.color) {
      setProductForm({ ...productForm, color: [...productForm.color, newClr] });
    } else {
      setProductForm({ ...productForm, color: [newClr] });
    }
    setNewColor({
      name: "",
      img: null,
    });
    newColorRef.current.value = "";
  };

  //register image in cloud Storage and get her url
  const sendImageToCloudStorage = () => {
    if (productForm.category) {
      if (newColor.img && newColor.name) {
        const imagesRef = ref(
          storage,
          `products-image/${productForm.category}/${productForm.id}/${newColor.img.name}`
        );
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

        setColorError("");
      } else {
        setColorError(
          "Please give a name and image to a new product color which you want to add to color list"
        );
      }
    } else {
      setColorError(
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
              ref={newColorRef}
              type="file"
              required
              onChange={(e) => handleChangeImg(e)}
            ></input>
          </label>
          <button onClick={sendImageToCloudStorage}>Add Color</button>
          <h1>{progressUpload} %</h1>
          {colorError && <div className="colorError">{colorError}</div>}
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
