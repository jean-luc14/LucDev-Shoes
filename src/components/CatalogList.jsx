import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";

const CatalogList = (props) => {
  const navigate = useNavigate();

  //state of catalog list
  const [catalogData, setCatalogData] = useState(null);

  //Go to specific category page
  const goToCatalogPage = (catalogSlug) => {
    const category = catalogSlug.toLowerCase().replace(/\s/g, "-");
    navigate(`/catalog=${category}`);
  };

  useEffect(() => {
    //Get all product category from firestore
    const getCatalogList = async () => {
      const querySnapshot = await getDocs(collection(db, "productData"));
      let productCatalogList = [];
      querySnapshot.forEach((doc) => {
        const docCategory = doc.data().category;
        productCatalogList.push(docCategory);
      });
      setCatalogData([...new Set(productCatalogList)]);
    };
    getCatalogList();
  }, []);

  return (
    <div className="catalog_list">
      <div className={`catalog_list_child ${props.navbar ? "navbar" : ""}`}>
        {catalogData &&
          catalogData.map((item, i) => (
            <div
              className="catalog_link"
              key={i}
              onClick={() => {
                if (props.navbar) {
                  props.animCatalogList();
                }
                goToCatalogPage(item);
              }}
            >
              <div className="catalog_link_child">{item}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CatalogList;
