import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./Components/SignupFormPage";
// import * as sessionActions from "./store/session";
// import Navigation from "./Components/Navigation";
// import ControllerContainer from './ControllerContainer'
import Controller from './Controller'

function App() {
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
      <Route>
          <Controller />
      </Route>
    </>
)
}

export default App;
