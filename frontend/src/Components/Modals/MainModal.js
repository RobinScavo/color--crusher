import React, { useContext } from 'react';

import HighScoreDisplay from '../HighScoreDisplay/HighScoreDisplay'
import KarenContext from '../../KarenContext'

import './LogInFormModal.css'
import './MainModel.css'

function MainModel() {
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
              values.toggleMainModal();
              values.toggleLoginModal();
            }}>Log In / Sign Up</button>
          </div>
        </div>


        <div className='lowerDiv'>
          <div className='modeSelectDiv'>

            {/* BattleMode */}
            <div className='modeDiv'>
              <div className='buttonDiv'>
                <h1 className='titleText'>BattleMode</h1>
                <button  className='goldButton battle' onClick={() => {
                  values.toggleMainModal();
                  values.toggleStartBattle();
                  values.startGame();
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
                <button className='goldButton convert' onClick={() => {
                  values.toggleMainModal();
                  values.toggleStartConvert();
                  values.startGame();
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
                  values.toggleLoginModal();
                  values.toggleBioModal();
                }}>Bio Page</button>
              </div>
              <div className='arrowTextBio'>
                <h1 className='arrow'>➛</h1>
                <h1 className='modeTextBio'>Meet the developer!</h1>
              </div>
            </div>
            </div>
            <HighScoreDisplay />
        </div>
      </div>
    </div>
    )
}

export default MainModel;
