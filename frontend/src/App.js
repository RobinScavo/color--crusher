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
          email: response.user['email']
          // isAuthenticated: true
        })
      })
      .catch(error => console.error(error))
  }
  // const dispatch = useDispatch();
  // const [isLoaded, setIsLoaded] = useState(false);
  // useEffect(() => {
  //   dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  // }, [dispatch]);

  return (
    <>
      {/* <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>

      )} */}
      {/* <Switch>
        <Route exact path ='/' component={Controller}>
        <Route path ='/players' component={Controller}>

      </Switch> */}
      {/* <Route> */}
      <UserContext.Provider value={{ user, onLogin }}>
          <Controller onLogin={onLogin}/>
      </UserContext.Provider>
      {/* </Route> */}
    </>
)
}

export default App;
