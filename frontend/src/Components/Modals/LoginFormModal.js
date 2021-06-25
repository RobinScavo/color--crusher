import React, { useContext, useState, useEffect } from "react";

import SignUpForm from '../SignupFormPage/SignUpFormPage'
import ColorContext from '../../ColorContext';
import UserContext from "../../context/UserContext";

import './LogInFormModal.css'

function LoginForm() {
  const values = useContext(ColorContext);
  const { onLogin, user } = useContext(UserContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(email, password)
    onLogin(email, password);
  }

  useEffect(() => {
    if(user.isAuthenticated) {
      values.toggleLoginModal()
      values.togglePlayerPageModal()
    } else {
      console.log('out')
    }

  }, [user])

  return (
    <>
    <div className='fullDiv'>
      <div className='logInFormDiv'>
        <h1 className='logSignTitle logTitle'>LogIn</h1>
        <form className='loginForm' onSubmit={handleLogin}>

            <input
              className='logInput'
              placeholder='Email'
              type="email"
              onChange={(event) => setEmail(event.target.value)}
            />

            <input
              className='logInput'
              placeholder='Password'
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />

            <button
              className='silverButton logSignButton'
              type="submit"
              disabled={!email && !password}
            >LogIn</button>

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
