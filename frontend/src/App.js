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
  const [players, setPlayers] = useState([])

  // const player = { key: null, name: '', email: '', password: '', score: 0}

  useEffect(() => {
    const playersRef = firebase.database().ref('players');
    playersRef.on('value', (snapshot) => {
      const players = snapshot.val();
      const newStatePlayers = [];
      for (let player in players) {
        newStatePlayers.push({
          key: player,
          name: players[player].name,
          email: players[player].email,
          password: players[player].password,
          score: players[player].score,
        })
      }
      setPlayers(newStatePlayers)
    });
  }, [])

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
    // console.log('logOut', user)
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser({
          email: 'guest',
          isAuthenticated: false
        });
      })
      .catch((error) => console.error(error))
  }

  const onSignup = (email, password, name, score) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((credential) => {
        // console.log('!!!!!!!!!!', credential)
        setUser({
          email: credential.user.email,
          isAuthenticated: true,
          name: name,
          score: score
        })
        addNewPlayer(email, password, name, score)
      })
      .catch((error) => console.error(error))
  }

  const onEdit = (key, email, name, score) => {
    const playerRef = firebase.database().ref('players/' + key);
    playerRef.update({
      name: name,
      email: email,
      score: score,
    })
  }

  const addNewPlayer = (email, password, name, score) => {
    const playersRef = firebase.database().ref('players')
    // delete player.key
    playersRef.push({
      name: name,
      email: email,
      password: password,
      score: score
    })
  }

  const deletePlayer = (player) => {
    if (window.confirm('Your account will be deleted. Proceed?')) {
      const playerRef = firebase.database().ref('players/' + player);
      playerRef.remove();
    }
    onLogout();
  }

  return (
    <>
      <UserContext.Provider value={{
        user,
        players,
        onLogin,
        onLogout,
        onSignup,
        onEdit,
        addNewPlayer,
        deletePlayer
      }}>
          <Controller/>
      </UserContext.Provider>
    </>
)
}

export default App;
