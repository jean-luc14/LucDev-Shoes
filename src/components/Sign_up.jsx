import React from 'react';
import '../scss/components/Sign_up.scss';
import User from '../iconAndImages/User.png';
import Email from '../iconAndImages/Email.png'
import Lock from "../iconAndImages/Lock.png";

const Sign_up = ({ reverse_sign, toogle_sign }) => {

  const handleSubmit = e => {
    e.preventDefault()
  }
  
  return (
    <>
      {reverse_sign ? <div className="op_sign" onClick={toogle_sign} /> : null}

      <div
        className="wrapper_sign"
        style={{
          top: reverse_sign ? "50%" : "-50%",
          left: reverse_sign ? "50%" : "50%",
          opacity: reverse_sign ? "1" : "0",
          transform: reverse_sign
            ? "translate(-50%,-50%)"
            : "translate(-50%,-50%)",
        }}
      >

        <form onSubmit={handleSubmit}>
          <h1>
            Sign up <span onClick={toogle_sign}> &times;</span>
          </h1>
          <div className="inputBox">
            <input type="test" placeholder="Username"></input>
            <img src={User} />
          </div>
          <div className="inputBox">
            <input type="test" placeholder="Email"></input>
            <img src={Email} />
          </div>
          <div className="inputBox">
            <input type="password" placeholder="Password"></input>
            <img src={Lock} />
          </div>
          <div className="inputBox">
            <input className="submit" type="submit" value="Log in"></input>
          </div>
          <p className="forget">
            Forget <a href="#">Password</a>
          </p>
          <p className="forget">
            Don't have an <a href="#">Account </a>
          </p>
        </form>
      </div>
    </>
  );
  
}


export default Sign_up;