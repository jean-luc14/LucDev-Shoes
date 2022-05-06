import React from 'react'
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import {useSelector} from 'react-redux'
import Section, { SectionTitle, SectionBody } from "../components/Sections";

const SearchResults = () => {
   const searchResults = useSelector( state => state.search.value );
  return (
    <div>
      <Section>
        <SectionTitle ProductCards={searchResults}>
          {`Search Results (${searchResults.length})`}
        </SectionTitle>
        { searchResults.length > 0 ?
          (<SectionBody>
          <Grid>
            {searchResults.map((e, i) => (
              <ProductCard productProps={e} key={i} />
            ))}
          </Grid>
        </SectionBody>):
         <h1 className='no_results'>No Results</h1>}
      </Section>
    </div>
  );
}

export default SearchResults