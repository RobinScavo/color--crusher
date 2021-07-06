import React, { useContext } from 'react'

import ColorContext from '../../context/ColorContext'

import './BattleInstructionModal.css'

const BattleInstructionModal = () => {
    const values = useContext(ColorContext);

    return (
        <div className='battleInstructionDiv'>
            <div className='definitionDiv'><span className='defSpan'>
                RGB (red, green, and blue)</span><br/>
                A system for representing the colors
                to be used on a computer display. Red, green, and
                blue can be combined in various proportions to
                obtain any color in the visible spectrum.
                Each level is represented by the range of decimal
                numbers from 0 to 255
            </div>
            <div className='exampleDiv'>
                <div className='exampleBall blackExample'></div>
                <div className='example leftExample'>RGB (0, 0, 0)</div>
                <div className='example'>RGB (255, 255, 255)</div>
                <div className='exampleBall whiteExample'></div>
            </div>
            <div className='exampleDiv'>
                <div className='exampleBall greenExample'></div>
                <div className='example leftExample'>RGB (0, 255, 0)</div>
                <div className='example'>RGB (255, 0, 255)</div>
                <div className='exampleBall yellowExample'></div>
            </div>
            <div className='summaryDiv'>Test your ability to decipher RGB values
                of increasing complexity.<br/> Earn points for speed and accuracy!</div>
            <button  className='gotItButton' onClick={() => {
                values.toggleBattleInstructionModal();
                values.newGame();
            }}>Got it!</button>
        </div>
    )
}

export default BattleInstructionModal
