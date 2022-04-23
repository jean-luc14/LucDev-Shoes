import React from 'react';
import './B.scss';



// Debugging Component
const B = () => {
  
  const color = [
    { name: "coffee"},
    { name: "black" },
    { name: "brown" },
    { name: "wine"  }
  ]
  return (
    <>
      {color.map((e,index)=>(
      <div key={index} className="div1">
        <img src={`/images/oxfords/1/${e.name}.jpg`} alt="" className="img1" />
      </div>
      ))}
    </>
  );
}
export default B;