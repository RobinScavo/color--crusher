import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./Components/SignupFormPage";
// import * as sessionActions from "./store/session";
// import Navigation from "./Components/Navigation";
// import ControllerContainer from './ControllerContainer'
import firebase from "./firebase";
import { useStorageState } from 'react-storage-hooks';

import UserContext from './context/UserContext'
import Controller from './Controller'

function App() {
  const [user, setUser] = useStorageState(localStorage, 'state-user', {});

  const onLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser({
          email: response.user['email'],
          isAuthenticated: true,
        })
      })
      .catch(error => console.error(error))
  }

  const onLogout = () => {
    console.log('logOut', user)
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser({ isAuthenticated: false });
      })
      .catch((error) => console.error(error))
  }

  const onEdit = (email, password) => {
    console.log(email, password)
  }

  return (
    <>
      <UserContext.Provider value={{ user, onLogin, onLogout, onEdit }}>
          <Controller/>
      </UserContext.Provider>
    </>
)
}

export default App;
