import React from 'react';
import User from "../iconAndImages/User.png";
import Email from "../iconAndImages/Email.png";
import Lock from "../iconAndImages/Lock.png";

  const Log_in = ({reverse_log, toogle_log}) => {

    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    return (
      <>
        {reverse_log ? <div className="op_log" onClick={toogle_log} /> : null}
        <div
          className="wrapper_log"
          style={{
            top: reverse_log ? "50%" : "-50%",
            left: reverse_log ? "50%" : "50%",
            opacity: reverse_log ? "1" : "0",
            transform: reverse_log
              ? "translate(-50%,-50%)"
              : "translate(-50%,-50%)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <h1>
              Sign up <span onClick={toogle_log}> &times;</span>
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
    
export default Log_in;