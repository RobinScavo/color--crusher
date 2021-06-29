import React, { useState, useEffect } from "react";
import { useStorageState } from 'react-storage-hooks';
import firebase from "./firebase";

import UserContext from './context/UserContext'
import Controller from './Controller'

function App() {
  const [user, setUser] = useStorageState(localStorage, 'state-user', {});
  const [players, setPlayers] = useState([])
  const [currentPlayer, setCurrentPlayer] = useState({ key: null, name: '', email: '', score: 0})

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
  }, []);

  useEffect(() => {
    let targetPlayer = { key: null, name: '', email: '', score: 0}
    if (user.email) {
      targetPlayer = players.find((player) => (player.email === user.email))
    } else {
      return
    }
    console.log(targetPlayer)
    firebase
      .auth()
      .onAuthStateChanged(() => {
        if (targetPlayer) {
          setCurrentPlayer({
            key: targetPlayer.key,
            name: targetPlayer.name,
            email: targetPlayer.email,
            score: targetPlayer.score
          })
        }
      })
  }, [user, players]);

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

  const onDemoLogin = () => onLogin('player@gmail.com', '121212')

  const onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setCurrentPlayer({
          key: null,
          name: '',
          email: '',
          score: 0
        })
        setUser({
          email: '',
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

  const updateScore = (newScore) => {
    const playerRef = firebase.database().ref('players/' + currentPlayer.key);
    if(newScore > currentPlayer.score) {
      playerRef.update({
        name: currentPlayer.name,
        email: currentPlayer.email,
        score: newScore
      })
    }
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
        currentPlayer,
        onLogin,
        onLogout,
        onSignup,
        onEdit,
        onDemoLogin,
        addNewPlayer,
        deletePlayer,
        updateScore
      }}>
          <Controller/>
      </UserContext.Provider>
    </>
)
}

export default App;
