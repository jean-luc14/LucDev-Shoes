import React,{useState} from 'react';
import './B.scss';
import Derby from "../../Assets/images/H.jpg";
import Moccasins from "../../Assets/images/moccasins/7/gray.jpg";



// Debugging Component
const B = () => {
  const [check, setCheck] = useState(true)

  const arr = { a: 1, b: 2, c: 3, d: 4, e: 5 }
  const arr2 ={a: 5, b: 6, c: 7, d: 8, e: 9}
  let arr3 = { ...arr2, ...arr }
  return (
    <>
      <div className="parent">
          <h1> {arr3.a} </h1>
          <h1> {arr3.b} </h1>
          <h1> {arr3.c} </h1>
          <h1> {arr3.d} </h1>
          <h1> {arr3.e} </h1>
          <input type='checkbox' checked={check} onClick={()=>setCheck(!check)} ></input>
      </div>
    </>
  );
}
export default B;