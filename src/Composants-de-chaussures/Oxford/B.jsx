import React,{useState,useEffect} from 'react';
import './B.scss';
import Derby from "../../Assets/images/H.jpg";
import Moccasins from "../../Assets/images/moccasins/7/gray.jpg";



// Debugging Component
const B = () => {
  
  
  useEffect(() => {
    let arr1 = [ ];
    let arr2 = [1, 2, 3, 4, 5];
    let arr;
    arr1.forEach(item => {
      arr = arr2.filter((e) => e < item);
      console.log(arr)
    })
  }, []);

  return (
    <>
      <div className="parent">
        <input type="checkbox"></input>
        <img
          width="250px"
          height="250px"
          src="/static/media/green.339b2bfe91263f18fc54.jpg"
        />
      </div>
    </>
  );
}
export default B;
