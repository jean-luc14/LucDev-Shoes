import React from 'react'
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import Section, { SectionTitle, SectionBody } from "../components/Sections";

const SearchResults = () => {
  return (
    <div>
      <div>
        Search
        {/* <Section>
          <SectionTitle ProductCards={catalogProductCards}>
            {'Search Results'}
          </SectionTitle>
          <SectionBody>
            <Grid>
              {catalogProductCards.map((e, i) => (
                <ProductCard productProps={e} key={i} />
              ))}
            </Grid>
          </SectionBody>
        </Section> */}
      </div>
    </div>
  );
}

export default SearchResults