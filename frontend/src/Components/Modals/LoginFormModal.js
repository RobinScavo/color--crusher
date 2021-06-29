import React, { useContext, useState, useEffect } from "react";

import SignUpForm from '../SignupFormPage/SignUpFormPage'
import ColorContext from '../../ColorContext';
import UserContext from "../../context/UserContext";

import './LogInFormModal.css'

function LoginForm() {
  const { togglePlayerPageModal,
          toggleMainModal,
          toggleLoginModal} = useContext(ColorContext);
  const { onLogin, onDemoLogin, user } = useContext(UserContext)

  const [email, setEmail] = useState('Email');
  const [password, setPassword] = useState('Password');

  const handleLogin = (event) => {
    event.preventDefault();
    onLogin(email, password);
  }

  useEffect(() => {
    if (user.isAuthenticated) {
      toggleLoginModal()
      togglePlayerPageModal()
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
              placeholder={email}
              type="email"
              onChange={(event) => setEmail(event.target.value)}
            />

            <input
              className='logInput'
              placeholder={password}
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />

            <button
              className='silverButton logSignButton'
              type="submit"
              disabled={!email && !password}
            >LogIn</button>

            <div className='demoButtonDiv'>
              <button
                id='demoButton'
                className='silverButton logSignButton'
                onClick={() => {
                  setEmail('demo@gmail.com')
                  setPassword('121212')
                  setTimeout(() => {
                    onDemoLogin()
                  }, 1200)
                }}
              >Demo</button>

              <h1 className='demoTextDiv'>
                <h1 id='demoArrow' className='arrow'>➛</h1>
                <h1 className='demoText'>Log in with demo credentials</h1>
              </h1>


            </div>

            <button  className='backButton' onClick={() => {
              toggleLoginModal();
              toggleMainModal();
            }}>Home</button>
        </form>
      </div>

      <div className='signUpFormDiv'>
        <SignUpForm />
      </div>
    </div>
    </>
  )
}

export default LoginForm;
