import React, { useState, useContext } from "react";
import { useStorageState } from "react-storage-hooks";

import UserContext from "../../context/UserContext";


function SignupFormPage() {
  const { onSignup, addNewPlayer } = useContext(UserContext)

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [score, setScore] = useState(0);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (password !== confirmPassword) return setError('Passwords do not match');

    // addNewPlayer(username, password, email, score)
    onSignup(email, password, username, score)
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h1 className='logSignTitle'>Sign Up</h1>

      <label className='signUpLabel'>
        <input
          placeholder='Email'
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
