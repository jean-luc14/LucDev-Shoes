import React,{useState,useEffect} from 'react'


const RelatedProducts = ({ product }) => {
  
  

  useEffect(() => {
    // Get uncertain numbers between 1 - 8 without id of current product page
    let relatedProductId = [];
    const relatedProductFunc = () => {
      if (product !== undefined) {
      
        for (let i = 0; relatedProductId.length < 4; i++) {
          let id = Math.round(Math.random() * 8);
          if (id === 0 || id == product.id) {
            
          } else if (
            relatedProductId.includes(`${id}`) 
          ) {
            relatedProductId.pop(); 
          } else {
            relatedProductId.push(`${id}`);
          }
        }  
    
      }
      console.log(relatedProductId) 
    } 
    relatedProductFunc();
  
  }, [product]);

  return <div>RelatedProduct</div>;
}

export default RelatedProducts