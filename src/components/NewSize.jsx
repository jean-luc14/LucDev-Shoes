import React, { useState } from "react";

const NewSize = ({ productForm, setProductForm }) => {
  const [newSize, setNewSize] = useState("");
  const [sizeError, setSizeError] = useState("");

  //Add new size to size list of new product
  const addNewSize = () => {
    if (newSize) {
      if (productForm.size) {
        let newSz = [...productForm.size];
        newSz.push(newSize);
        setProductForm({ ...productForm, size: [...newSz] });
      } else {
        const newSz = [newSize];
        setProductForm({ ...productForm, size: [...newSz] });
      }
      setNewSize("");
      setSizeError("");
    } else {
      setSizeError("Please enter a size to add to product sizes list ");
    }
  };

  return (
    <div className="new_size_wrapper">
      <label>
        Add new size:
        <input
          type="number"
          value={newSize}
          onChange={(e) => setNewSize(e.target.value)}
        ></input>
      </label>
      <button onClick={addNewSize}>Add New Size</button>
      {sizeError && <div className="sizeError">{sizeError}</div>}
      <div className="size_list">
        <div>Product Sizes:</div>
        {productForm.size &&
          productForm.size.map((item, index) => <div key={index}>{item},</div>)}
      </div>
    </div>
  );
};

export default NewSize;
