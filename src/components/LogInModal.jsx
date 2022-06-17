import React, { useState, useRef } from "react";
import Email from "../Assets/icons/Email.png";
import Lock from "../Assets/icons/Lock.png";
import { logIn } from "../redux/firebase/FirebaseSlice";
import { useNavigate } from "react-router-dom";

const LogInModal = ({ reverse_log, toggle_log, toggle_forgot }) => {
  // form state
  const [form, setForm] = useState({
    email: { value: "" },
    password: { value: "" },
  });

  //firebase
  const [firebaseErrMes, setFirebaseErrMes] = useState("");

  const formRefLog = useRef();

  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const newField = { [fieldName]: { value: fieldValue } };
    setForm({ ...form, ...newField });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(form.email.value, form.password.value);
      formRefLog.current.reset();
      setFirebaseErrMes("");
      toggle_log();
    } catch {
      setFirebaseErrMes("Wopsy, Email and/or password incorrect");
    }
  };

  return (
    <>
      {reverse_log ? (
        <div
          className="op_log"
          onClick={() => {
            toggle_log();
            setFirebaseErrMes("");
          }}
        />
      ) : null}
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
        <form onSubmit={handleSubmit} ref={formRefLog}>
          <h1>
            Log In{" "}
            <span
              onClick={() => {
                toggle_log();
                setFirebaseErrMes("");
              }}
            >
              {" "}
              &times;
            </span>
          </h1>
          {/* email input */}
          <div className="inputBox">
            <input
              name="email"
              type="text"
              value={form.email.value}
              placeholder="Email"
              onChange={(e) => handleInputChange(e)}
            ></input>
            <img src={Email} />
          </div>
          {/* password input */}
          <div className="inputBox">
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password.value}
              onChange={(e) => handleInputChange(e)}
            ></input>
            <img src={Lock} />
          </div>
          <small className="firebaseErrMes">{firebaseErrMes}</small>
          <input className="submit" type="submit" value="Log in"></input>
          <p className="forget">
            Forget <i onClick={toggle_forgot}>Password</i>
          </p>
          <p className="forget">
            Don't have an <i>Account </i>
          </p>
        </form>
      </div>
    </>
  );
};

export default LogInModal;
