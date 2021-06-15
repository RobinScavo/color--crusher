import React, { useContext, useState } from "react";
// import { useDispatch } from "react-redux";

// import * as sessionActions from "../../store/session";
import SignUpForm from '../SignupFormPage/SignUpFormPage'
import ColorContext from '../../ColorContext'

import './LogInFormModal.css'

function LoginForm() {
  const values = useContext(ColorContext)
  // const dispatch = useDispatch();
  // const [credential, setCredential] = useState("");
  // const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setErrors([]);
  //   return dispatch(sessionActions.login({ credential, password })).catch(
  //     (res) => {
  //       if (res.data && res.data.errors) setErrors(res.data.errors);
  //     }
  //   );
  // };

  // onSubmit={handleSubmit}

  return (
    <>
    <div className='fullDiv'>
      <div className='logInFormDiv'>
        <h1 className='logSignTitle logTitle'>LogIn</h1>
        <form className='loginForm' >
          {/* {<ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>} */}
            <input
              className='logInput'
              placeholder='Player Name'
              type="text"
              // value={credential}
              // onChange={(e) => setCredential(e.target.value)}
              required
            />
            <input
              className='logInput'
              placeholder='Password'
              type="password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className='silverButton logSignButton' type="submit">LogIn</button>
            <button  className='backButton' onClick={() => {
              values.toggleLoginModal();
              values.toggleMainModal();
            }}>Home</button>
        </form>
      </div>
      <div className='signUpFormDiv'>
        <SignUpForm />
      </div>
      <button className='playerPageButton' onClick={() => {
        values.toggleLoginModal();
        values.togglePlayerPageModal();
      }}>Player</button>
    </div>
    </>
  )
}

export default LoginForm;
