import React, { useState, useRef, useEffect } from "react";
import Email from "../Assets/icons/Email.png";
import Lock from "../Assets/icons/Lock.png";
import Warning from "../Assets/icons/warning.png";
import { signUp } from "../redux/firebase/FirebaseSlice";
import { useNavigate } from "react-router-dom";

const SignUpModal = ({ reverse_sign, toggle_sign }) => {
  const navigate = useNavigate();

  //firebase
  const [firebaseErrMes, setFirebaseErrMes] = useState("");

  // form state
  const [form, setForm] = useState({
    email: { value: "", errorMes: "", isValid: false },
    password: { value: "", errorMes: "", isValid: false },
    checkPassword: { value: "", errorMes: "", isValid: false },
  });

  const formRef = useRef();

  // REGEX
  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const PASSWORD_REGEX = /^(?=.*\d).{4,14}$/;
  const USERNAME_REGEX = /^[a-zA-Z0-9][a-zA-Z0-9_]{2,14}$/;

  //check the form validity and show request error if form isn't valid
  const validForm = () => {
    let newForm = form;

    if (EMAIL_REGEX.test(form.email.value)) {
      const newField = { value: form.email.value, errorMes: "", isValid: true };
      newForm = { ...newForm, ...{ email: newField } };
    } else {
      const error = "Invalid format email";
      const newField = {
        value: form.email.value,
        errorMes: error,
        isValid: false,
      };
      newForm = { ...newForm, ...{ email: newField } };
    }

    if (PASSWORD_REGEX.test(form.password.value)) {
      const newField = {
        value: form.password.value,
        errorMes: "",
        isValid: true,
      };
      newForm = { ...newForm, ...{ password: newField } };
    } else {
      const error =
        "The password must be between 4 and 15 characters and at least 1 digit";
      const newField = {
        value: "",
        errorMes: error,
        isValid: false,
      };
      newForm = { ...newForm, ...{ password: newField } };
    }

    if (form.password.value === form.checkPassword.value) {
      const newField = {
        value: form.checkPassword.value,
        errorMes: "",
        isValid: true,
      };
      newForm = { ...newForm, ...{ checkPassword: newField } };
    } else {
      const error = "The passwords do not match";
      const newField = {
        value: "",
        errorMes: error,
        isValid: false,
      };
      newForm = { ...newForm, ...{ checkPassword: newField } };
    }
    setForm(newForm);
  };

  //update input value in state
  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const newField = {
      [fieldName]: { value: fieldValue, errorMes: "", isValid: false },
    };
    setForm({ ...form, ...newField });
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    validForm();
  };

  useEffect(() => {
    // send request to firebase to login if form validity is true
    const sendRequest = async () => {
      if (
        form.email.isValid &&
        form.password.isValid &&
        form.checkPassword.isValid
      ) {
        try {
          await signUp(form.email.value, form.password.value);
          formRef.current.reset();
          setFirebaseErrMes("");
          toggle_sign();
        } catch (err) {
          if (err.code === "auth/invalid-email") {
            setFirebaseErrMes("Invalid format email");
          }
          if (err.code === "auth/email-already-in-use") {
            setFirebaseErrMes("Email already used");
          }
        }
      }
    };

    sendRequest();
  }, [form.email.isValid, form.password.isValid, form.checkPassword.isValid]);

  return (
    <>
      {reverse_sign ? (
        <div
          className="op_sign"
          onClick={() => {
            toggle_sign();
            setFirebaseErrMes("");
            setForm({
              ...form,
              email: { ...form.email, errorMes: "" },
              password: { ...form.password, errorMes: "" },
              checkPassword: { ...form.checkPassword, errorMes: "" },
            });
          }}
        />
      ) : null}

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
        <form onSubmit={handleSubmit} ref={formRef}>
          <h1>
            Sign up{" "}
            <span
              onClick={() => {
                toggle_sign();
                setFirebaseErrMes("");
                setForm({
                  ...form,
                  email: { ...form.email, errorMes: "" },
                  password: { ...form.password, errorMes: "" },
                  checkPassword: { ...form.checkPassword, errorMes: "" },
                });
              }}
            >
              {" "}
              &times;
            </span>
          </h1>
          {/* email input */}
          <div className="inputBox">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={form.email.value}
              onChange={(e) => handleInputChange(e)}
            ></input>
            <img src={Email} />
            {form.email.errorMes.length > 0 ? (
              <div className="inputAlert">
                <span></span>
                <small>
                  <img src={Warning} />
                  {form.email.errorMes}
                </small>
              </div>
            ) : null}
          </div>
          {/* password input */}
          <div className="inputBox">
            <input
              type="password"
              name="password"
              value={form.password.value}
              placeholder="Password"
              onChange={(e) => handleInputChange(e)}
            ></input>
            <img src={Lock} />
            {form.password.errorMes.length > 0 ? (
              <div className="inputAlert">
                <span></span>
                <small>
                  <img src={Warning} />
                  {form.password.errorMes}
                </small>
              </div>
            ) : null}
          </div>
          {/* confirm password input */}
          <div className="inputBox">
            <input
              type="password"
              name="checkPassword"
              value={form.checkPassword.value}
              placeholder="Password two"
              onChange={(e) => handleInputChange(e)}
            ></input>
            <img src={Lock} />
            {form.checkPassword.errorMes.length > 0 ? (
              <div className="inputAlert">
                <span></span>
                <small>
                  <img src={Warning} />
                  {form.checkPassword.errorMes}
                </small>
              </div>
            ) : null}
          </div>
          {/* submit form */}
          <small className="firebaseErrMes">{firebaseErrMes}</small>
          <input className="submit" type="submit" value="Sign up"></input>
        </form>
      </div>
    </>
  );
};

export default SignUpModal;
