import React,{useState,useRef,useEffect} from 'react'


const Section = props => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export const SectionTitle = props => {
  // States and useEffect to add class to h1
  const [activeTitle, setActiveTitle] = useState(false);
  // const [noActiveTitle, setNoActiveTitle] = useState(false);
  const h1 = useRef();
  // let active; 
  
  useEffect(() => {
    // active = true;
    setActiveTitle(true);
    // console.log(active);
    // console.log(activeTitle);
    // // return () => {
    // //   active = false;
    // // };
  }, []);
  
  return (
    <div className="sectionTitle">
      {props.ProductCards.length > 0 ? (
        <>
          <img src={props.ProductCards[0].color[0].img} />
          <div className="sectionTitle_child">
            <h1 className={`${activeTitle ? "active" : ""}`}>
              {props.children}
            </h1>
          </div>
          <div>
            {props.instruction}
          </div>
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
}

export const SectionBody = props => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Section