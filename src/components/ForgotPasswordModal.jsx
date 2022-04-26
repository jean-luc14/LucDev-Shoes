import React,{useState} from 'react'
import {forgotPassword} from '../redux/firebase/FirebaseSlice'
import Warning from "../Assets/icons/warning.png";
import Email from "../Assets/icons/Email.png";

const ForgotPasswordModal = ({ reverse_forgot, toggle_forgot }) => {

  // State for input value, invalid email error, toggle to show invalid email error and firebase Error in order
  const [inputValue, setInputValue] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [showEmailErr, setShowEmailErr] = useState(false);
  const [errFromFirebase, setErrFromFirebase] = useState('');

  // Regex of Email
  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  // check validity of Email
  const validEmail = () => {
    if (EMAIL_REGEX.test(inputValue)) {
      setEmailErr("");
      setShowEmailErr(false)
    } else {
      setEmailErr("Invalid format email");
      setShowEmailErr(true)
    }
  }

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault()
    validEmail();
    try {
      await forgotPassword(inputValue);
      toggle_forgot();
      alert(
        "We have sent an email to your address so you can change your password"
      );
    }catch {
      setErrFromFirebase("An error has occurred, please try again");
    }
  }

  // Update the value of input in the state
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <>
      {reverse_forgot ? (
        <div
          className="op_forgot"
          onClick={() => {
            toggle_forgot();
            setErrFromFirebase("");
            setShowEmailErr(false);
          }}
        />
      ) : null}

      <div
        className="wrapper_forgot"
        //ref={backdropWrapperSign}
        style={{
          top: reverse_forgot ? "50%" : "-50%",
          left: reverse_forgot ? "50%" : "50%",
          opacity: reverse_forgot ? "1" : "0",
          transform: reverse_forgot
            ? "translate(-50%,-50%)"
            : "translate(-50%,-50%)",
        }}
      >
        <form onSubmit={handleSubmit} >
          <h1>
            Email
            <span
              onClick={() => {
                toggle_forgot();
                setShowEmailErr(false);
              }}
            >
              &times;
            </span>
          </h1>
          {/* email input */}
          <div className="inputBox">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={inputValue}
              onChange={(e) => handleChange(e)}
            ></input>
            <img src={Email} />
            {showEmailErr ? (
              <div className="inputAlert">
                <span></span>
                <small>
                  <img src={Warning} />
                  {emailErr}
                </small>
              </div>
            ) : null}
          </div>
          {/* submit form */}
          <small className="errFromFirebase">{errFromFirebase}</small>
          <input className="submit" type="submit" value="Send"></input>
        </form>
      </div>
    </>
  );
};

export default ForgotPasswordModal