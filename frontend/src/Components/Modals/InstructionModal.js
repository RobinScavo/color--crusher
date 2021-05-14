import React, { useContext } from 'react';

import HighScoreDisplay from '../HighScoreDisplay/HighScoreDisplay'
import KarenContext from '../../KarenContext'

import './LogInFormModal.css'
import './InstructionModel.css'

function InstructionModal() {
  const values = useContext(KarenContext);

  return (
    <div className='instructionDiv'>
      <div className='allModeDiv'>
        <div className='upperDiv'>
          <div className='greetingDiv'>
            <h1 className='greetingText'><span className='biggerGreet'>Play as a guest</span> or log in to save your progress</h1>
            <h1 className='arrow arrowLog'>➛</h1>
          </div>

          {/* Log In */}
          <div className='optionDiv'>
            <button className='logStateButton' onClick={() => {
              values.toggleInstructionModal();
              values.toggleLoginModal();
            }}>Log In / Sign Up</button>
          </div>
        </div>

        {/* Zen Mode */}
        <div className='lowerDiv'>
          <div className='modeSelectDiv'>
            {/* <div className='modeDiv'>
              <div className='buttonDiv'>
                <h1 className='titleText'>Zen Mode</h1>
                <button className='goldButton zen' onClick={() => {
                    values.toggleInstructionModal();
                    values.toggleStartZen();
                    values.startGame();
                }}>zen</button>
              </div>
              <div className='arrowText'>
                <h1 className='arrow'>➛</h1>
                <h1 className='modeText'>Just klick the balls. Relax.</h1>
              </div>
            </div> */}

            {/* BattleMode */}
            <div className='modeDiv'>
              <div className='buttonDiv'>
                <h1 className='titleText'>Battle Mode</h1>
                <button  className='goldButton battle' onClick={() => {
                  values.toggleInstructionModal();
                  values.toggleStartBattle();
                  values.startGame();
                }}>Battle</button>
              </div>
              <div className='arrowText'>
                <h1 className='arrow'>➛</h1>
                <h1 className='modeText'>Compete aginst the best!</h1>
              </div>
            </div>

            {/* Demo mode */}
            <div className='modeDiv'>
              <div className='buttonDiv'>
                <h1 className='titleText'>ConvertMode</h1>
                <button className='goldButton convert' onClick={() => {
                  values.toggleInstructionModal();
                  values.toggleStartConvert();
                  values.startGame();
                }}>Konvert</button>
              </div>
              <div className='arrowText'>
                <h1 className='arrow'>➛</h1>
                <h1 className='modeText'>Convert your colors.</h1>
              </div>
            </div>
          </div>
          <HighScoreDisplay />
        </div>
      </div>
    </div>
    )
}

export default InstructionModal;
