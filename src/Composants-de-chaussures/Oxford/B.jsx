import React,{useState,useEffect} from 'react';
import './B.scss';
import Derby from "../../Assets/images/H.jpg";
import Moccasins from "../../Assets/images/moccasins/7/gray.jpg";



// Debugging Component
const B = () => {
  
  const arr = [];
  const arr2 = ['a','b','c','d','e','f','g','h','i']

  const foo = () => {
    let hey;
    arr.forEach((item) => {
     hey = arr2.filter(e => e == item )
     console.log(hey);
    })
  }
  
  useEffect(() => {
    
  }, []);

  return (
    <>
      <div className="parent" onClick={foo}>
        <input type="checkbox"></input>
      </div>
    </>
  );
}
export default B;