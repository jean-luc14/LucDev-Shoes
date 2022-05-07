import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import Section, { SectionTitle, SectionBody } from "../components/Sections";
import { searchProducts } from "../Assets/data/ProductData";
import {catalogData} from '../Assets/data/CatalogData'


const SearchResults = () => {

  //params
  const params = useParams();
  let searchResults = searchProducts(params.slug);
  useEffect(() => {
    const filter = document.querySelector(".products_filter");
    filter.addEventListener("mousemove", (e) => {
      console.log(e.clientX);
    });
  }, [])
  

  return (
    <div className="search_results">
      <Section>
        <SectionTitle ProductCards={searchResults}>
          {`Search Results (${searchResults.length})`}
        </SectionTitle>
        {searchResults.length > 0 ? (
          <SectionBody>
            <div className="search_results_body">
              <Filter/>
              <div className="search_results_body_child">
                <Grid searchResults={true}>
                  {searchResults.map((e, i) => (
                    <ProductCard productProps={e} key={i} />
                  ))}
                </Grid>
              </div>
            </div>
          </SectionBody>
        ) : null}
      </Section>
    </div>
  );
}

const Filter = () => {
  return (
    <div className="products_filter">
      <div className="products_filter_item_category">
        <h2>Filter By Categories</h2>
        <ul>
          {catalogData.map((e, index) => (
            <li key={index}>{e.display} </li>
          ))}
        </ul>
      </div>
      <div className="products_filter_item_price">
        <div className="products_filter_item_price_title">
          <h2>Filter By Price</h2>
          <h3>Price</h3>
        </div>
        <div className="products_filter_item_price_child">
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="products_filter_item_color">
        <h2>Filter By Color</h2>
        <div>
          <ul>
            <li>Black</li>
            <li>Brown</li>
            <li>Gray</li>
            <li>Blue</li>
            <li>White</li>
          </ul>
          <ul>
            <li>Green</li>
            <li>Red</li>
            <li>Auburn</li>
            <li>Orange</li>
            <li>Yellow</li>
          </ul>
          <ul>
            <li>Coffee</li>
            <li>Golden</li>
            <li>Wine</li>
            <li>Khaki</li>
            <li>Ivory</li>
          </ul>
          <ul>
            <li>Sapphire</li>
          </ul>
        </div>
      </div>
      <div className="products_filter_item_search">
        <input
          type="search"
          name="search"
          placeholder="Search Products..."
        ></input>
        <input type="button" value="Search"></input>
      </div>
    </div>
  );
}

export default SearchResults