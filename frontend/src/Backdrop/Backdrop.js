import React, { useContext } from 'react';

import RGBboard from '../RGB/RGBboard'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import Window from '../Components/Window/Window'
import KarenContext from '../KarenContext'


import './Backdrop.css'

const BackDrop = () => {
    const values = useContext(KarenContext);

    return (
        <div className='backDrop'>
            <Banner />
            <div className='upperRoundDiv'>
                <Window />
                <RGBboard />
                <div className='innerDiv'></div>
                <div className='sideDivRight'></div>
                <div className='sideDiv'></div>
                <Footer />
                <div className='bottomBar'>
                    {values.startBattle &&
                        <h3>Skore</h3>
                    }
                    {values.startBattle &&
                        <h3>Koins</h3>
                    }
                </div>
            </div>
        </div>
    )
}


export default BackDrop;
