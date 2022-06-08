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
        <div className='child'>
          <div></div>
         </div>
      </div>
    </>
  );
}
export default B;
