import React, { useContext } from 'react';

import ColorContext from '../../ColorContext'
import HighScoreDisplay from '../HighScoreDisplay/HighScoreDisplay'

import './PlayerPageModal.css'

const PlayerPageModal = () => {
    const values = useContext(ColorContext);

    return (
        <div className='playerDiv'>
            <div className='leftSideDiv'>
                <h1 className='nameText'>Sebastian Scavo</h1>
                <div className='fancyDisplayDiv  koinText'>
                    <h1 className='yourDisplayText'>Coin Count</h1>
                    <div className='silverButton playerButton'>256</div>
                </div>
                <div className='fancyDisplayDiv skoreText'>
                    <h1 className='yourDisplayText'>High Score</h1>
                    <div className='silverButton playerButton'>498</div>
                </div>
            </div>
            <div className='rightSideDiv'>
                <HighScoreDisplay id='scoringHiScore'/>
            </div>
            <button className='backButton' onClick={() => {
                values.togglePlayerPageModal();
                values.toggleMainModal();
            }}>Back</button>
        </div>
    )
}

export default PlayerPageModal;
