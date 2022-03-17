import React from 'react';
import './B.scss';
import HightOrderComponent from '../../components/HightOrderComponent';

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
 
  return (
    <>
      <div className="div1">
        <div className="div2">
          {array1.map((item, i) => (
            <h1 key={i}>
              {item.name} {item.firstName}
            </h1>
          ))}
           {/* {array1FuncJean.map((item, i) => (
            <>
              <p>{item.age}</p>
              <p>{item.sexe}</p>
            </> 
          ))}
          {array1FuncFauster.map((item, i) => (
            <>
              <p>{item.age}</p>
              <p>{item.sexe}</p>
            </>
          ))} */}
        </div>
      </div>
    </>
  );
}
export default HightOrderComponent(B);