import React, { useState, useEffect } from "react";

const Section = (props) => {
  return <div>{props.children}</div>;
};

export const SectionTitle = (props) => {
  // States and useEffect to add class to h1
  const [activeTitle, setActiveTitle] = useState(false);

  useEffect(() => {
    setActiveTitle(true);
  }, []);

  return (
    <div className="sectionTitle">
      {props.ProductCards.length > 0 ? (
        <>
          {props.cartPage ? (
            <img
              src={props.ProductCards[0].img}
              alt={props.ProductCards[0].name}
            />
          ) : (
            <img
              src={props.ProductCards[0].color[0].img}
              alt={props.ProductCards[0].color[0].name}
            />
          )}
          <div className="sectionTitle_child">
            <h1 className={`${activeTitle ? "active" : ""}`}>
              {props.children}
            </h1>
          </div>
          <div>{props.instruction}</div>
        </>
      ) : (
        <>
          <div className="sectionTitle_child">
            <h1 className={`${activeTitle ? "active" : ""}`}>
              {props.children}
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export const SectionBody = (props) => {
  return <div className="sectionBody">{props.children}</div>;
};

export default Section;
