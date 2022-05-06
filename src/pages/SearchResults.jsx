import React from 'react'
import {useParams} from 'react-router-dom'
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import Section, { SectionTitle, SectionBody } from "../components/Sections";
import { searchProducts } from "../Assets/data/ProductData";


const SearchResults = () => {

  const params = useParams();

  // fonction qui met a jour la valeur de l'input dans le state
  let searchResults = searchProducts(params.slug);
  return (
    <div className="search_results">
      <Section>
        <SectionTitle ProductCards={searchResults}>
          {`Search Results (${searchResults.length})`}
        </SectionTitle>
        {searchResults.length > 0 ? (
          <SectionBody>
            <div>
              <div className="products_filter"></div>
              <div className="search_results_child">
                <Grid>
                  {searchResults.map((e, i) => (
                    <ProductCard productProps={e} key={i}/>
                  ))}
                </Grid>
              </div>
            </div>
          </SectionBody>
        ) : null }
      </Section>
    </div>
  );
}

export default SearchResults