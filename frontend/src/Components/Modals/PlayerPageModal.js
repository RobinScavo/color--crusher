import React, { useContext, useState } from 'react';

import ColorContext from '../../ColorContext';
import UserContext from '../../context/UserContext';

import HighScoreDisplay from '../HighScoreDisplay/HighScoreDisplay'

import './PlayerPageModal.css'

const PlayerPageModal = () => {
    const values = useContext(ColorContext);
    const { onLogout, onEdit } = useContext(UserContext);

    const [editMode, setEditMode] =useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleEdit = (event) => {
      event.preventDefault();
      console.log(email, password, name)
      onEdit(email, password)
    }

    return (
        <div className='playerDiv'>
            {editMode ? (
                <div className='leftSideDiv'>
                    <div className='logInFormDiv' id='editForm'>
                        <h1 className='logSignTitle editTitle'>Edit Info</h1>
                        <form  className='loginForm' onSubmit={handleEdit}>

                            <input
                            className='logInput'
                            placeholder='Email'
                            type="email"
                            onChange={(event) => setEmail(event.target.value)}
                            />

                            <input
                            className='logInput'
                            placeholder='Password'
                            type="password"
                            onChange={(event) => setPassword(event.target.value)}
                            />

                            <input
                            className='logInput'
                            placeholder='Name'
                            type="text"
                            onChange={(event) => setName(event.target.value)}
                            />

                            <button
                            className='silverButton logSignButton'
                            type="submit"
                            disabled={!email && !password}
                            >Edit</button>

                        </form>
                    </div>
                    <button  id='editHomeButton' className='backButton' onClick={() => {
                        values.toggleLoginModal();
                        values.toggleMainModal();
                    }}>Home</button>
                    <button
                        id='cancelButton'
                        className='upperPlayerButton'
                        onClick={() => setEditMode(false)}
                    >Cancel</button>
                </div>
                ) : (
                <div className='leftSideDiv'>
                    <div className='playerButtonDiv'>
                        <button
                            id='editButton'
                            className='upperPlayerButton'
                            onClick={() => setEditMode(true)}
                        >Edit</button>

                        <button id='deleteButton' className='upperPlayerButton'>Delete</button>

                        <button
                            id='logoutButton'
                            className='upperPlayerButton'
                            onClick={(event) => {
                                event.preventDefault();
                                onLogout();
                            }}
                        >Logout</button>
                    </div>

                    <div className='playerDisplayDiv'>
                        <h1 className='nameText'>Sebastian Scavo</h1>
                        <div className='fancyDisplayDiv skoreText'>
                            <h1 className='yourDisplayText'>High Score</h1>
                            <div className='silverButton playerButton'>498</div>
                        </div>
                    </div>

                    <button id='playerHomeButton' className='upperPlayerButton' onClick={() => {
                            values.togglePlayerPageModal();
                            values.toggleMainModal();
                    }}>Home</button>
                </div>
                )
            }

            <div className='rightSideDiv'>
                <HighScoreDisplay id='playerHiScore'/>
            </div>
        </div>
    )
}

export default PlayerPageModal;
