import React, { useContext } from 'react'

import KarenContext from '../../KarenContext';

import './FooterButtons.css'



const FooterButtons = () => {
    const values = useContext(KarenContext)

    const checkZen = () => {
        if (values.startZen) values.toggleStartZen()
    }
    const checkBattle = () => {
        if (values.startBattle) values.toggleStartBattle()
    }
    const checkConvert = () => {
        if (values.startConvert) values.toggleStartConvert()
    }

    return (
        <div className='footerButtonDiv'>
            <button className='footerButton' onClick={() => {
                checkZen();
                checkBattle();
                checkConvert();
                values.clearRounds();
                values.toggleGameOn();
            }}>Home</button>
            <button className='footerButton' onClick={() => {
                values.toggleWindowDisplay();
            }}>Show Values</button>
        </div>
    )
}

export default FooterButtons
