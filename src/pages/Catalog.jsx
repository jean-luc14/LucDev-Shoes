import React, {useState,useEffect}from 'react'
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import NewAndFavorite from "../components/NewAndFavorite";
import Section, { SectionTitle, SectionBody } from "../components/Sections";
import {useParams} from 'react-router-dom'
import {catalogData} from "../Assets/data/CatalogData";
import {productData} from "../Assets/data/ProductData";

const Catalog = props => {
  // Get display of current category
  const [activeCatalogPage, setActiveCatalogPage] = useState(null);

  //Get products witch are in current category
  const [catalogProductCards, setCatalogProductCards] = useState(null);
  const params = useParams();
  const catalog = params.catalogSlug; 

  useEffect(() => {
    // Search product category witch is in params 
    catalogData.forEach((item) => {
      if (catalog === item.path) {
        setActiveCatalogPage(item);
      }
    });
    
    // Search products witch are in current category
    const catalogProductCards = productData.filter((element) => {
      return element.catalogSlug === catalog
    });
    setCatalogProductCards(catalogProductCards);

  }, [catalog]);
  return (
    <>
      {/* The Section title and body are in Sections.jsx */}
      {activeCatalogPage ? (
        <div>
          <Section>
            <SectionTitle ProductCards={catalogProductCards}>
              {activeCatalogPage.display}
            </SectionTitle>
            <SectionBody>
              <Grid searchResults={false}>
                {catalogProductCards.map((e, i) => (
                  <ProductCard productProps={e} key={i} />
                ))}
              </Grid>
            </SectionBody>
          </Section>
          <NewAndFavorite/>
        </div>
      ) : (
        <h1>This catalog page does not found</h1>
      )}
    </>
  );
}


export default Catalog


