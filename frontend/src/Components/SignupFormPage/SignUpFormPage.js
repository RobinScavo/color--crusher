import React, { useState, useContext } from "react";
// import { useStorageState } from "react-storage-hooks";

import UserContext from "../../context/UserContext";

function SignupFormPage() {
  const { onSignup, setFlashMessage } = useContext(UserContext)

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [score, setScore] = useState(0);
  // const [error, setError] = useState('')

  const validateEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) return setFlashMessage('mismatched');
    if (password.length < 6 || password.length > 15) return setFlashMessage('improperlyPassworded');
    if (username.length < 3 || username.length > 15) return setFlashMessage('improperlyNamed');
    if (!validateEmail(email)) return setFlashMessage('improperlyEmailed')


    onSignup(email, password, username, 0)
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h1 className='logSignTitle'>Sign Up</h1>

      <label className='signUpLabel'>
        <input
          placeholder='Email'
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
          required
        />
      </label>

      <label className='signUpLabel'>
        <input
          placeholder='Player Name'
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>

      <label className='signUpLabel'>
        <input
          placeholder='Password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <label className='signUpLabel'>
        <input
          placeholder='Confirm Password'
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>

      <button
        id='signUpButton'
        className='silverButton'
        type="submit"
      >SignUp</button>

    </form>
  );
}

export default SignupFormPage;
