import React, { useState } from "react";

const NewSize = ({ productForm, setProductForm }) => {
  const [newSize, setNewSize] = useState(0);

  //Add new size to size list of new product
  const addNewSize = () => {
    if (productForm.size) {
      let newSz = [...productForm.size];
      newSz.push(newSize);
      setProductForm({ ...productForm, size: [...newSz] });
    } else {
      const newSz = [newSize];
      setProductForm({ ...productForm, size: [...newSz] });
    }
    setNewSize(0);
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
      <div className="size_list">
        <div>Product Sizes:</div>
        {productForm.size &&
          productForm.size.map((item, index) => <div key={index}>{item},</div>)}
      </div>
    </div>
  );
};

export default NewSize;
