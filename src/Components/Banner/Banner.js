import React, { useContext } from 'react';

import './Banner.css';

import ColorContext from '../../context/ColorContext';
import UserContext from '../../context/UserContext';

import ScoreTimer from './ScoreTimer';
import CryptoCoin from './CryptoCoin';

const Banner = () => {
    const values = useContext(ColorContext);
    const { currentPlayer } = useContext(UserContext);

    return (
        <div className='bannerDiv'>
            {!values.scoringModal &&
                <ScoreTimer
                    gameStart={values.gameOn}
                    updateTimer={values.updateTimer}
                    gameOn={values.gameOn}
                    timer={values.timer}
                    round={values.round}
                    startBattle={values.startBattle}
                />
            }

            {!values.gameOn && !values.startBattle &&
                <h1 className='gameName'>Color Crusher</h1>
            }
            {values.startBattle &&
                <h1 className='gameName'>Battle Mode</h1>
            }
            {values.startConvert &&
                <h1 className='gameName'>Color Converter</h1>
            }

            {!values.scoringModal &&
                <>
                <CryptoCoin index={0} className='cryptoOne'/>
                <CryptoCoin index={1} className='cryptoTwo'/>
                <CryptoCoin index={2} className='cryptoThree'/>
                </>
            }

            <h1 className='userName'>{`${currentPlayer.name}`}</h1>
        </div>
    )
}

export default Banner;
