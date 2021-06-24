import React, { useContext } from 'react';

import './Banner.css';

// import UserName from './UserName'
import ColorContext from '../../ColorContext';
import UserContext from '../../context/UserContext';

import ScoreTimer from './ScoreTimer';
import CryptoCoin from './CryptoCoin';

const Banner = () => {
    const values = useContext(ColorContext);
    const { user } = useContext(UserContext);
    console.log(user)

    return (
        <div className='bannerDiv'>
            {!values.scoringModal &&
                <ScoreTimer gameStart={values.gameOn}/>
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
            <h1 className='userName'>{`${user.email}`}</h1>
            {/* <UserName /> */}
        </div>
    )
}

export default Banner;
