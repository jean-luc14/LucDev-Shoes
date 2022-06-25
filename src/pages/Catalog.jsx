import React, { useState, useEffect } from "react";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import NewAndFavorite from "../components/NewAndFavorite";
import Section, { SectionTitle, SectionBody } from "../components/Sections";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { productData } from "../Assets/data/ProductData";
import Filter from "../components/Filter";

const Catalog = (props) => {
  const params = useParams();
  const catalog = params.catalogSlug;

  const [activeFilterBtn, setActiveFilterBtn] = useState(false);

  //Get products witch are in current category
  const [catalogProductCards, setCatalogProductCards] = useState(undefined);
  const [catalogProductCardsClone, setCatalogProductCardsClone] =
    useState(undefined);

  let allFilterByPriceResults = [];
  let allFilterByColorResults = [];

  //get quantity of each product color
  const getColorQuantity = (productColor, colorCheck) => {
    let filterByColorResults = [];

    if (colorCheck) {
      filterByColorResults = catalogProductCards.filter((item) =>
        item.color.some((e) =>
          e.name
            .toLowerCase()
            .replace(/\s/g, "")
            .includes(productColor.toLowerCase().replace(/\s/g, ""))
        )
      );
    }
    return filterByColorResults.length;
  };

  /*filter catalogProductCards Products By Price
   and push it to allFilterByPriceResults */
  const filterByPrice = (price) => {
    allFilterByPriceResults = catalogProductCards.filter(
      (e) => e.price < price
    );
  };

  /*filter allFilterByPriceResults Products By Color (the
    filter result of each color is push to allFilterByColorResults because,
    this function is called by all color in ColorFilter component )*/
  const filterByColor = (productColor, colorCheck) => {
    let filterByColorResults = [];

    if (colorCheck) {
      filterByColorResults = allFilterByPriceResults.filter((item) =>
        item.color.some((e) =>
          e.name
            .toLowerCase()
            .replace(/\s/g, "")
            .includes(productColor.toLowerCase().replace(/\s/g, ""))
        )
      );

      allFilterByColorResults.push(...filterByColorResults);
    }
  };

  // push all filter results to catalogProductCardsClone state
  const putFilterResultsInState = () => {
    let arr = [...new Set(allFilterByColorResults)];
    setCatalogProductCardsClone(arr);
  };

  useEffect(() => {
    //get from firestore product which have as category param.catalogSlug and put them to the state
    const getProductByCategory = async () => {
      const q = query(
        collection(db, "productData"),
        where("category", "==", catalog)
      );

      const querySnapshot = await getDocs(q);
      let products = [];
      querySnapshot.forEach((doc) => {
        products.push(doc.data());
      });

      setCatalogProductCards(products);
      setCatalogProductCardsClone(products);
    };

    getProductByCategory();
  }, [catalog]);
  return (
    <>
      {/* The title and body sections components are in Sections.jsx */}
      {catalogProductCards && catalogProductCardsClone && (
        <div className="catalog">
          <Section>
            <SectionTitle
              ProductCards={catalogProductCardsClone}
              instruction={
                <div className="color_instruction">
                  <span className="triangle"></span>
                  Each product has different colors, please click on the buy
                  button to see the other colors of the product{" "}
                </div>
              }
            >
              {`${catalog.replace("-", " ")} (${
                catalogProductCardsClone.length
              })`}
            </SectionTitle>
            <SectionBody>
              <div className="catalog_body">
                <div className="filter_btn_wrapper">
                  <button
                    className="filter_btn"
                    onClick={() => {
                      setActiveFilterBtn(!activeFilterBtn);
                    }}
                  >
                    Filter{" "}
                  </button>
                  <div
                    className={`filter_btn_child ${
                      activeFilterBtn ? "active" : ""
                    }`}
                  >
                    <Filter
                      searchPage={false}
                      getColorQuantity={getColorQuantity}
                      searchResults={catalogProductCards}
                      filterByPrice={filterByPrice}
                      filterByColor={filterByColor}
                      putFilterResultsInState={putFilterResultsInState}
                      slug={catalog}
                    />
                  </div>
                  {activeFilterBtn ? (
                    <div
                      className="filter_btn_wrapper_bg"
                      onClick={() => {
                        setActiveFilterBtn(!activeFilterBtn);
                      }}
                    ></div>
                  ) : null}
                </div>
                <Filter
                  searchPage={false}
                  getColorQuantity={getColorQuantity}
                  searchResults={catalogProductCards}
                  filterByPrice={filterByPrice}
                  filterByColor={filterByColor}
                  putFilterResultsInState={putFilterResultsInState}
                  slug={catalog}
                />
                <div className="catalog_body_child">
                  {catalogProductCardsClone.length > 0 ? (
                    <Grid searchResults={false}>
                      {catalogProductCardsClone.map((e, i) => (
                        <ProductCard productProps={e} key={i} />
                      ))}
                    </Grid>
                  ) : (
                    <div className="no_results">
                      <h1> Oops! No Results </h1>
                      <div>
                        <span className="triangle"></span>
                        Please select at least one active (red) product color.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </SectionBody>
          </Section>
          <NewAndFavorite />
        </div>
      )}
    </>
  );
};

export default Catalog;
