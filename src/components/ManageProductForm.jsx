import React from "react";
import NewColor from "./NewColor";
import NewSize from "./NewSize";
import NewProductPreview from "./NewProductPreview";

const ManageProductForm = ({ productForm, setProductForm, add }) => {
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
    <div className="manage_product">
      <div className="manage_product_child">
        <form>
          {add && (
            <>
              <div className="category_wrapper">
                <label>
                  Product Category:
                  <input
                    type="text"
                    required
                    value={productForm.category}
                    onChange={(e) =>
                      setProductForm({
                        ...productForm,
                        category: e.target.value,
                      })
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
            </>
          )}
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
  );
};

export default ManageProductForm;
