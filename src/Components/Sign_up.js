import React from 'react';
import './Sign_up.scss';
import User from './User.png';
import Email from './Email.png'
import Lock from './Lock.png';

const Sign_up = ({ reverse_sign, toogle_sign }) => {
  
  return (
    <>
      {reverse_sign ? <div className="op_log" onClick={toogle_sign} /> : null}

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
          <div className="form">
            <h1>
              Sign up <span onClick={toogle_sign}> &times;</span>
            </h1>
            <form>
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
                <input id="submit" type="submit" value="Log in"></input>
              </div>
              <p className="forget">
                Forget <a href="#">Password</a>
              </p>
              <p className="forget">
                Don't have an <a href="#">Account </a>
              </p>
            </form>
          </div>

      </div>
    </>
  );
  
}


export default Sign_up;