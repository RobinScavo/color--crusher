import React, { useContext, useState, useEffect } from 'react';

import UserContext from '../../context/UserContext';

import HighScoreDisplay from '../HighScoreDisplay/HighScoreDisplay';

import './PlayerPageModal.css';

const PlayerPageModal = (props) => {
    const { onLogout, onEdit, user, deletePlayer, currentPlayer } = useContext(UserContext);

    const [editMode, setEditMode] =useState(false);
    const [email, setEmail] = useState(currentPlayer.email);
    const [name, setName] = useState(currentPlayer.name);

    const handleEdit = () => onEdit(currentPlayer.key, email, name, currentPlayer.score)
    const handleDelete = () => deletePlayer(currentPlayer.key);

    useEffect(() => {}, [user])

    return (
        <div className='playerDiv'>
            {editMode &&
                <div className='leftSideDiv'>
                    <div className='logInFormDiv' id='editForm'>
                        <h1 className='logSignTitle editTitle'>Edit Info</h1>
                        <div  className='loginForm' >

                            <input
                            className='logInput'
                            placeholder={currentPlayer.email}
                            type="email"
                            onChange={(event) => setEmail(event.target.value)}
                            />

                            <input
                            className='logInput'
                            placeholder={currentPlayer.name}
                            type="text"
                            onChange={(event) => setName(event.target.value)}
                            />

                            <button
                            className='silverButton logSignButton'
                            type="submit"
                            disabled={!email && !user.password}
                            onClick={handleEdit}
                            >Edit</button>

                        </div>
                    </div>
                    <button  id='editHomeButton' className='backButton' onClick={() => {
                        props.toggleLoginModal();
                        props.toggleMainModal();
                    }}>Home</button>
                    <button
                        id='cancelButton'
                        className='upperPlayerButton'
                        onClick={() => setEditMode(false)}
                    >Cancel</button>
                </div>}

                {!editMode &&
                    <div className='leftSideDiv'>
                        <div className='playerButtonDiv'>
                            {currentPlayer.email &&
                                <>
                                <button
                                    id='editButton'
                                    className='upperPlayerButton'
                                    onClick={() => setEditMode(true)}
                                >Edit</button>

                                <button
                                    id='deleteButton'
                                    className='upperPlayerButton'
                                    onClick={() => handleDelete(user)}
                                >Delete</button>

                                <button
                                    id='logoutButton'
                                    className='upperPlayerButton'
                                    onClick={(event) => {
                                        event.preventDefault();
                                        onLogout();
                                        props.toggleMainModal();
                                        props.togglePlayerPageModal();
                                    }}
                                >Logout</button>
                                </>
                            }

                            {!currentPlayer.email &&
                                <button
                                    className='upperPlayerButton'
                                    onClick={() => {
                                        props.togglePlayerPageModal();
                                        props.toggleLoginModal();
                                    }}
                                >Login</button>
                            }

                        </div>

                        <div className='playerDisplayDiv'>
                            <h1 className='nameText'>{currentPlayer.name}</h1>
                            <div className='fancyDisplayDiv skoreText'>
                                <h1 className='yourDisplayText'>High Score</h1>
                                <div className='silverButton playerButton'>{currentPlayer.score}</div>
                            </div>
                        </div>

                        <button id='playerHomeButton' className='upperPlayerButton' onClick={() => {
                                props.togglePlayerPageModal();
                                props.toggleMainModal();
                        }}>Home</button>
                    </div>}

            <div className='rightSideDiv'>
                <HighScoreDisplay id='playerHiScore'/>
            </div>
        </div>
    )
}

export default PlayerPageModal;
