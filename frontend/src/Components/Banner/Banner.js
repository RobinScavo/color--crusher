import React, { useContext } from 'react';
import './Banner.css';
// import LoginFormModel from '../Components/LoginFormModal/LogInFormModal'


import UserName from './UserName'
import KarenContext from '../../KarenContext'
import ScoreTimer from './ScoreTimer';
import CryptoCoin from './CryptoCoin';

const Banner = () => {
    const values = useContext(KarenContext)

    return (
        <div className='bannerDiv'>
            <ScoreTimer gameStart={values.gameOn}/>

            {!values.gameOn && !values.startBattle && !values.startZen &&
                <h1 className='gameName'>Color Crusher</h1>
            }
            {values.startBattle &&
                <h1 className='gameName'>Battle Mode</h1>
            }
            {/* {values.startZen &&
                <h1 className='gameName'>Zen Mode</h1>
            } */}
            {values.startConvert &&
                <h1 className='gameName'>Color Converter</h1>
            }

            <CryptoCoin index={0} className='cryptoOne'/>
            <CryptoCoin index={1} className='cryptoTwo'/>
            <CryptoCoin index={2} className='cryptoThree'/>
            <UserName />
        </div>
    )
}

export default Banner;
