import React, {useState,useEffect}from 'react'
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import NewAndFavorite from "../components/NewAndFavorite";
import Section, { SectionTitle, SectionBody } from "../components/Sections";
import {useParams} from 'react-router-dom'
import {catalogData} from "../Assets/data/CatalogData";
import { productData } from "../Assets/data/ProductData";
import Filter from "../components/Filter";

const Catalog = props => {
  const params = useParams();
  const catalog = params.catalogSlug; 
  
  // Get current category
  const [activeCatalogPage, setActiveCatalogPage] = useState(
    catalogData.find((item) => catalog === item.path)
  );

  //Get products witch are in current category
  const [catalogProductCards, setCatalogProductCards] = useState(
    productData.filter(e => e.catalogSlug === catalog)
  );
  const [catalogProductCardsClone, setCatalogProductCardsClone] = useState(
    productData.filter(e => e.catalogSlug === catalog)
  );

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

  //filter Products By Price and push it in allFilterByPriceResults variable
  const filterByPrice = (price) => {
    allFilterByPriceResults = catalogProductCards.filter(
      e => e.price < price
    );
  };

  //filter Products By Color and push it in allFilterByColorResults variable
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

  // update all filter in filter results state to show in DOM
  const putFilterResultsInState = () => {
    //if (allFilterByColorResults.length > 0) { 
      let arr = [...new Set(allFilterByColorResults)];
      setCatalogProductCardsClone(arr);
    //}
  };

  useEffect(() => {
    // put product category witch is in params in state
    setActiveCatalogPage(catalogData.find(item => catalog === item.path)) 
    
    // put products witch are in current category in state
     setCatalogProductCards(
      productData.filter((e) => e.catalogSlug === catalog)
    );
    setCatalogProductCardsClone(
      productData.filter((e) => e.catalogSlug === catalog)
    );

  }, [catalog]);
  return (
    <>
      {/* The title and body sections components are in Sections.jsx */}
      {activeCatalogPage ? (
        <div className='catalog'>
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
              {`${activeCatalogPage.display} (${catalogProductCardsClone.length})`}
            </SectionTitle>
            <SectionBody>
              <div className="catalog_body">
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
      ) : (
        <h1>This catalog page does not found</h1>
      )}
    </>
  );
}


export default Catalog


