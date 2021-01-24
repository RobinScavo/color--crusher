import React, { useContext } from 'react';
import './Banner.css';
// import LoginFormModel from '../Components/LoginFormModal/LogInFormModal'


import UserName from './UserName'
import KarenContext from '../KarenContext'
import ScoreTimer from '../Components/ScoreTimer';
import CryptoCoin from '../Components/CryptoCoin';

const Banner = () => {
    const values = useContext(KarenContext)

    return (
        <div className='bannerDiv'>
            <ScoreTimer gameStart={values.gameOn}/>

            {!values.gameOn && !values.startBattle && !values.startZen &&
                <h1 className='gameName'>Kolor Krusher</h1>
            }
            {values.startBattle &&
                <h1 className='gameName'>Battle Mode</h1>
            }
            {values.startZen &&
                <h1 className='gameName'>Zen Mode</h1>
            }

            <CryptoCoin />
            <UserName />
        </div>
    )
}

export default Banner;
