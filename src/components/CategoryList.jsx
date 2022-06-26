import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const CategoryList = (props) => {
  const navigate = useNavigate();

  //state of category list
  const [categoryData, setCategoryData] = useState(null);

  //Go to specific category page
  const goToCategoryPage = (categorySlug) => {
    const category = categorySlug.toLowerCase().replace(/\s/g, "-");
    navigate(`/category=${category}`);
  };

  useEffect(() => {
    //Get all product category from firestore
    const getCategoryList = async () => {
      const querySnapshot = await getDocs(collection(db, "productData"));
      let productCategoryList = [];
      querySnapshot.forEach((doc) => {
        const docCategory = doc.data().category;
        productCategoryList.push(docCategory);
      });
      setCategoryData([...new Set(productCategoryList)]);
    };
    getCategoryList();
  }, []);

  return (
    <div className="category_list">
      <div className={`category_list_child ${props.navbar ? "navbar" : ""}`}>
        {categoryData &&
          categoryData.map((item, i) => (
            <div
              className="category_link"
              key={i}
              onClick={() => {
                if (props.navbar) {
                  props.animCategoryList();
                }
                goToCategoryPage(item);
              }}
            >
              <div className="category_link_child">{item}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryList;
