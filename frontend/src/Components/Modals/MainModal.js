import React, { useContext } from 'react';

import HighScoreDisplay from '../HighScoreDisplay/HighScoreDisplay'
import ColorContext from '../../ColorContext'

import './LogInFormModal.css'
import './MainModel.css'

function MainModel() {
  const values = useContext(ColorContext);

  return (
    <div className='instructionDiv'>
        <div className='upperDiv'>
          <div className='greetingDiv'>
            <h1 className='greetingText'><span className='biggerGreet'>Play as a guest</span> or <span className='optionalText'>log in to display your score</span></h1>
            <h1 className='arrow arrowLog'>➛</h1>
          </div>

          {/* Log In */}
          <div className='optionDiv'>
            <button className='modalButton' onClick={() => {
              values.toggleMainModal();
              values.toggleLoginModal();
            }}>Log In / Sign Up</button>
          </div>
        </div>

        <div className='lowerDiv'>

            {/* BattleMode */}
            <div className='modeDiv'>
              <div className='buttonDiv'>
                <h1 className='titleText'>BattleMode</h1>
                <button  className='silverButton battle' onClick={() => {
                  values.toggleMainModal();
                  values.toggleBattleInstructionModal();
                  // values.toggleStartBattle();
                  // values.startGame();
                }}>Battle</button>
              </div>
              <div className='arrowText'>
                <h1 className='arrow'>➛</h1>
                <h1 className='modeText'>Try your RGB reading skills against the best in the world!</h1>
              </div>
            </div>

            {/* Convert mode */}
            <div className='modeDiv'>
              <div className='buttonDiv'>
                <h1 className='titleText'>ConvertMode</h1>
                <button className='silverButton convert' onClick={() => {
                  values.toggleMainModal();
                  values.toggleConvertInstructionModal();
                }}>Convert</button>
              </div>
              <div className='arrowText'>
                <h1 className='arrow'>➛</h1>
                <h1 className='modeText'>Convert your color values or find your next color scheme.</h1>
              </div>
            </div>

            {/*Bio page*/}
            <div className='modeDiv'>
              <div className='buttonDiv'>
                <h1 className='titleText'>MeetMode</h1>
                <button className='bioPic' onClick={() => {
                  values.toggleMainModal();
                  values.toggleBioModal();
                }}>Bio</button>
              </div>
              <div className='arrowText'>
                <h1 className='arrow'>➛</h1>
                <h1 className='modeText meetMeText'>Meet the developer!</h1>
              </div>
            </div>
            <HighScoreDisplay />
        </div>
    </div>
    )
}

export default MainModel;
