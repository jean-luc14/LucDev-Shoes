import React, {useState,useEffect}from 'react'
import PropTypes from 'prop-types'
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import {useParams} from 'react-router-dom'
import {catalogData} from "../Assets/data/CatalogData";
import {productData} from "../Assets/data/ProductData";

const Catalog = props => {

  const [activeCatalogPage, setActiveCatalogPage] = useState(null);
  const [catalogProductCards, setCatalogProductCards] = useState(null);
  const params = useParams();
  const catalog = params.catalogSlug; 
  useEffect(() => {
    catalogData.forEach((item) => {
      if (catalog === item.path) {
        setActiveCatalogPage(item);
      }
    });
      
    const catalogProductCards = productData.filter((element) => {
      return element.catalogSlug === catalog
    });
    
    setCatalogProductCards(catalogProductCards);
  }, [catalog]);
  return (
    <>
      {activeCatalogPage ? (
        <div>
          <Section>
            <SectionTitle>{activeCatalogPage.display}</SectionTitle>
            <SectionBody>
              <Grid gap={20}>
                {catalogProductCards.map((e, i) => (
                  <div key={i}>
                    <ProductCard productProps={e} />
                  </div>
                ))}
              </Grid>
            </SectionBody>
          </Section>
        </div>
      ) : (
        <h1>This cataloog page does not found</h1>
      )}
    </>
  );
}

Catalog.propTypes = {}

export default Catalog


