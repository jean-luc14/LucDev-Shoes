import React,{useState} from 'react';
import User from "../iconAndImages/User.png";
import Email from "../iconAndImages/Email.png";
import Lock from "../iconAndImages/Lock.png";
import { logIn } from "../redux/firebase/FirebaseSlice";
import { useNavigate } from "react-router-dom";

  const LogInModal = ({reverse_log, toggle_log}) => {

      const [form, setForm] = useState({
        user: { value: ''},
        email: { value: ''},
        password: { value: ''}
      });

    const [firebaseErrMes, setFirebaseErrMes] = useState('')

    const handleInputChange = e => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const newField = { [fieldName]: { value: fieldValue } }
    setForm({...form,...newField})
  }

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          await logIn(
          form.email.value,
          form.password.value
        )
        setFirebaseErrMes('')
        toggle_log()
      } catch {
        setFirebaseErrMes("Wopsy, Email and/or password incorrect");  
      }
    };
  
    return (
      <>
        {reverse_log ? <div className="op_log" onClick={toggle_log} /> : null}
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
              Log In <span onClick={toggle_log}> &times;</span>
            </h1>
            <div className="inputBox">
              <input name='user' type="test" placeholder="Username"  onChange={(e) => handleInputChange(e)}></input>
              <img src={User} />
            </div>
            <div className="inputBox">
              <input name='email' type="test" placeholder="Email"  onChange={(e) => handleInputChange(e)}></input>
              <img src={Email} />
            </div>
            <div className="inputBox">
              <input name='password' type="password" placeholder="Password"  onChange={(e) => handleInputChange(e)}></input>
              <img src={Lock} />
            </div>
            <small className="firebaseErrMes">{firebaseErrMes}</small>
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
    
export default LogInModal;