import React, { useContext } from 'react'

import ColorContext from '../../ColorContext'

import Bowl from '../Footer/Bowl';
import HighScoreDisplay from '../HighScoreDisplay/HighScoreDisplay';

import './ScoringModal.css'
import '../HighScoreDisplay/HighScoreDisplay.css'

const ScoringModal = () => {
    const values = useContext(ColorContext)

    return (
        <div className='scoringDiv'>
            <div className='scoringHalf'>
                <div className='bowlScoringDiv'>
                    <Bowl id='scoringBowlTop'/>
                    <h2 className='scoringLabelTop'>Speed</h2>
                    <Bowl id='scoringBowl'/>
                    <h2 className='scoringLabel'>Accuracy</h2>
                </div>
                <div className='displayScoringDiv'>
                    <h2 className='scoringDisplay'>420</h2>
                    <h2 className='arithmetic'>+</h2>
                    <h2 className='scoringDisplay'>310</h2>
                    <h2 className='arithmetic'>x 2</h2>
                    <div className='totalDisplayDiv'>
                        <h2 className='totalDisplay'>730</h2>
                        <h3 className='totalLabel'>Total</h3>
                    </div>
                </div>
            </div>
            <HighScoreDisplay />
            <button id='scoreButton' className='backButton' onClick={() => {
                values.toggleScoringModal();
                values.toggleMainModal();
            }}>Back</button>
        </div>
    )
}

export default ScoringModal;
