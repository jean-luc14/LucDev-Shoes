import React from 'react';
import './B.scss';
import HightOrderComponent from '../../components/HightOrderComponent';



// Debugging Component
const B = () => {
  const array2 = () => [
    {
      firstName: "jean-Luc",
      name: "Buckner",
    },
    {
      firstName: "fauster",
      name: "Houmavo",
    },
  ];
  const array1 = array2();
  // const array1FuncJean = array1[1].Func();
  // const array1FuncFauster = array1[2].Func();
  const arr =[]
  console.log(arr.length)
  return (
    <>
      <div className="div1">
        <div className="div2">
          {array1.map((item, i) => (
            <>
              <h1 key={i}>
                {item.name} {item.firstName}
              </h1>
              <div className="div4">div 4</div>
              <div className="div3">div 3</div>
            </>
          ))}
        </div>
      </div>
      <div className="div5">div 5</div>
      <img className="imgB" src="/static/media/H.ffd10d7442a49328aca2.jpg" />
    </>
  );
}
export default HightOrderComponent(B);