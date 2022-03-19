import React,{useState} from 'react';
import '../scss/components/Sign_up.scss';
import User from '../iconAndImages/User.png';
import Email from '../iconAndImages/Email.png'
import Lock from "../iconAndImages/Lock.png";

const Sign_up = ({ reverse_sign, toogle_sign }) => {

  // state qui gere la mise a jour du formulaire 
  const [form, setForm] = useState({
    user: { value: "", isValid: false },
    email: { value: "", isValid: false },
    password: { value: "", isValid: false },
    checkPassword: { value: "", isValid: false },
  });

  //fonction qui gere la mise a jour des inputs
  const handleInputChange = e => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const newField = { [fieldName]: { value: fieldValue } }
    setForm({...form,...newField})
  }

  // fonstion qui gere la soumission du formulaire
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
          {/* Username input */}
          <div className="inputBox">
            <input
              type="test"
              name="user"
              placeholder="Username"
              value={form.user.value}
              onChange={(e) => handleInputChange(e)}
            ></input>
            <img src={User} />
          </div>
          {/* email input */}
          <div className="inputBox">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email.value}
              onChange={(e) => handleInputChange(e)}
            ></input>
            <img src={Email} />
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
          </div>
          {/* submit input */}
          <div className="inputBox">
            <input className="submit" type="submit" value="Sign up"></input>
          </div>
        </form>
      </div>
    </>
  );
  
}


export default Sign_up;