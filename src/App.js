import React, { useState, useEffect } from "react";
import { useStorageState } from 'react-storage-hooks';
import firebase from "./firebase";

import UserContext from './context/UserContext'
import Controller from './Controller'
import Message from './Components/Message/Message'

function App() {
  const [user, setUser] = useStorageState(localStorage, 'state-user', {});
  const [players, setPlayers] = useState([])
  const [currentPlayer, setCurrentPlayer] = useState({ key: null, name: '', email: '', score: 0})
  const [message, setMessage] = useState('')

  useEffect(() => {
    const playersRef =
      firebase
        .database()
        .ref('players')

    console.log('AAAAAAAA', playersRef)

    playersRef.on('value', (snapshot) => {
      console.log('BBBBBBBBBBB')
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

      newStatePlayers.sort(function(a, b) {
        return b.score - a.score
      })

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
      .catch(() => setFlashMessage('invalidCredentialed'))
  }

  const onDemoLogin = () => onLogin('player@gmail.com', '121212')

  const onLogout = () => {
    const nullPlayer = {
      key: null,
      name: '',
      email: '',
      score: 0
    }

    firebase
      .auth()
      .signOut()
      .then(() => {
        setCurrentPlayer(nullPlayer)

        setUser({
          email: '',
          isAuthenticated: false
        });
      })
      .catch(() => setFlashMessage('logoutFailed'))
  }

  const onSignup = (email, password, name, score) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((credential) => {
        setUser({
          email: credential.user.email,
          isAuthenticated: true,
        })

        addNewPlayer(email, password, name, score)
      })
      .catch(() => setFlashMessage('signupFailed'))
  }

  const onEdit = (key, email, name, score) => {
    //disallow modification of Player and Guest
    if (user.email === 'guest@gmail.com' || user.email === 'player@gmail.com') {
      setFlashMessage('cannotEdit')
      return
    }

    const newInfo =({
      name: name,
      email: email,
      score: score,
    })

    const playerRef = firebase.database().ref('players/' + key);
    playerRef.update(newInfo)
    setFlashMessage('updated')
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

  const setFlashMessage = (message) => {
    setMessage(message)
    setTimeout(() => {
      setMessage(null)
    }, 1600)
  }

  const addNewPlayer = (email, password, name, score) => {
    const playersRef = firebase.database().ref('players')

    playersRef.push({
      name: name,
      email: email,
      password: password,
      score: score
    });
    setFlashMessage('saved')
  }

  const deletePlayer = (player) => {
    //disallow modification of Player and Guest
    if (user.email === 'guest@gmail.com' || user.email === 'player@gmail.com') {
      setFlashMessage('cannotEdit')
      return
    }

    if (window.confirm('Your account will be deleted. Proceed?')) {
      const playerRef = firebase.database().ref('players/' + player);
      playerRef.remove();
      setFlashMessage('deleted')
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
        updateScore,
        setFlashMessage
      }}>
          {message && <Message type={message} />}
          <Controller />
      </UserContext.Provider>
    </>
)
}



export default App;
