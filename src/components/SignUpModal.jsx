import React,{useState,useRef} from 'react';
import User from '../Assets/icons/User.png';
import Email from '../Assets/icons/Email.png'
import Lock from "../Assets/icons/Lock.png";
import Warning from "../Assets/icons/warning.png";
import { signUp } from '../redux/firebase/FirebaseSlice'
import {useNavigate} from 'react-router-dom'


const SignUpModal = ({ reverse_sign, toggle_sign }) => {

  const navigate = useNavigate()
  
  //firebase
  const [firebaseErrMes, setFirebaseErrMes] = useState('');
  



  // form state
  const [form, setForm] = useState({
    user: { value: "", errorMes: "", isValid: false },
    email: { value: "", errorMes: "", isValid: false },
    password: { value: "", errorMes: "", isValid: false },
    checkPassword: { value: "", errorMes: "", isValid: false },
  });

  const formRef = useRef()

  // REGEX
  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const PASSWORD_REGEX = /^(?=.*\d).{4,14}$/
  const USERNAME_REGEX = /^[a-zA-Z0-9][a-zA-Z0-9_]{2,14}$/


  //fonction pour examiner la validiter du formulaire
  const validForm = () => {
    let newForm = form;
    if (USERNAME_REGEX.test(form.user.value)) {
      const newField = { value: form.user.value, errorMes: "", isValid: true };
      newForm = {...newForm,...{user:newField}}
    } else {
      const error =
        "The username must be between 3 and 15 characters long, must contain only hyphens and underscores as special characters, and the first letter must be a number or a character.";
      const newField = { value: form.user.value, errorMes: error, isValid: false }
      newForm = { ...newForm, ...{ user: newField } };
    }


    if (EMAIL_REGEX.test(form.email.value)) {
      const newField = { value: form.email.value, errorMes: "", isValid: true };
      newForm = { ...newForm, ...{ email: newField } };
    } else {
      const error = "Invalid format email";
      const newField = {value: form.email.value, errorMes: error, isValid: false};
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
        value: form.password.value,
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
        value: form.checkPassword.value,
        errorMes: error,
        isValid: false,
      };
      newForm = { ...newForm, ...{ checkPassword: newField } };
    }
    setForm(newForm);
    return form.user.isValid && form.email.isValid && form.password.isValid && form.checkPassword.isValid;
  }
  /* //Ref et condition pour changer le flou (Perfomance animation)

  const backdropWrapperSign = useRef(null)
  useEffect(() => {
    if (reverse_sign) {
      setTimeout(() => {
        backdropWrapperSign.current.classList.add("backdrop");
      }, 500);
    } else {
      backdropWrapperSign.current.classList.remove("backdrop");
    }
   }, [reverse_sign]);*/


  //fonction qui gere la mise a jour des inputs
  const handleInputChange = e => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const newField = { [fieldName]: { value: fieldValue } }
    setForm({...form,...newField})
  }

  // fonstion qui gere la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    validForm();
    //if (
    // form.user.isValid &&
    // form.email.isValid &&
    //  form.password.isValid &&
    //  form.checkPassword.isValid
    //  ) {
    try {
      await signUp(form.email.value, form.password.value);
      formRef.current.reset();
      setFirebaseErrMes("");
      toggle_sign();
      navigate("/private/private-cart");
    } catch (err) {
      if (err.code === "auth/invalid-email") {
        setFirebaseErrMes("Invalid format email");
      }
      if (err.code === "auth/email-already-in-use") {
        setFirebaseErrMes("Email already used");
      }
    }
    // console.log(form.email.value);
    // console.log(form.password.value);
  }
  
  return (
    <>
      {reverse_sign ? (
        <div
          className="op_sign"
          onClick={() => {
            toggle_sign();
            setFirebaseErrMes("");
          }}
        />
      ) : null}

      <div
        className="wrapper_sign"
        //ref={backdropWrapperSign}
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
              }}
            >
              {" "}
              &times;
            </span>
          </h1>
          {/* Username input */}
          <div className="inputBox">
            <input
              type="text"
              name="user"
              placeholder="Username"
              value={form.user.value}
              onChange={(e) => handleInputChange(e)}
            ></input>
            <img src={User} />
            {form.user.isValid ? null : (
              <div className="inputAlert ">
                <img src={Warning} />
                <small>{form.user.errorMes}</small>
              </div>
            )}
          </div>
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
            {form.email.isValid ? null : (
              <div className="inputAlert">
                <img src={Warning} />
                <small>{form.email.errorMes}</small>
              </div>
            )}
          </div>
          {/* password input */}
          <div className="inputBox">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password.value}
              onChange={(e) => handleInputChange(e)}
            ></input>
            <img src={Lock} />
            {form.password.isValid ? null : (
              <div className="inputAlert">
                <img src={Warning} />
                <small>{form.password.errorMes}</small>
              </div>
            )}
          </div>
          {/* confirm password input */}
          <div className="inputBox">
            <input
              type="password"
              name="checkPassword"
              placeholder="Password two"
              value={form.checkPassword.value}
              onChange={(e) => handleInputChange(e)}
            ></input>
            <img src={Lock} />
            {form.checkPassword.isValid ? null : (
              <div className="inputAlert">
                <img src={Warning} />
                <small>{form.checkPassword.errorMes}</small>
              </div>
            )}
          </div>
          {/* submit form */}
          <small className="firebaseErrMes">{firebaseErrMes}</small>
          <input className="submit" type="submit" value="Sign up"></input>
        </form>
      </div>
    </>
  );
  
}


export default SignUpModal;