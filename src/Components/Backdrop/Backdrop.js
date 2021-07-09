import React, { useContext } from 'react';

import ColorContext from '../../context/ColorContext';

import GameContainer from '../RGB/GameContainer';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Window from '../Window/Window';
import CustomWindow from '../CustomWindow/CustomWindow';


import './Backdrop.css'

const BackDrop = () => {
    const values = useContext(ColorContext);

    return (
        <div className='backDrop'>
            <Banner />
            <div className='upperRoundDiv'>

                <Window
                    windowDisplayed={values.windowDisplayed}
                    colorArray={values.colorArray}
                    startBattle={values.startBattle}
                />

                <CustomWindow
                    customDisplayed={values.customDisplayed}
                    customColor={values.customColor}
                />

                <GameContainer />

                <div className='innerDiv'></div>
                <div className='sideDivRight'></div>
                <div className='sideDiv'></div>

                <Footer />

                <div className='bottomBar'>
                    {values.startBattle &&
                        <h3 className='bottomBarText'>Score</h3>
                    }
                    {values.startBattle &&
                        <h3 className='bottomBarText'>Coins</h3>
                    }
                </div>
            </div>
        </div>
    )
}


export default BackDrop;
