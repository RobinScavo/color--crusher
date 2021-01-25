import React, { useContext } from 'react'

import KarenContext from '../KarenContext';

import './FooterButtons.css'



const FooterButtons = () => {
    const values = useContext(KarenContext)

    const checkZen = () => {
        if (values.startZen) values.toggleStartZen()
    }
    const checkBattle = () => {
        if (values.startBattle) values.toggleStartBattle()
    }

    return (
        <div className='footerButtonDiv'>
            <button className='footerButton' onClick={() => {
                values.toggleGameOn();
                values.clearRounds();
                checkZen();
                checkBattle();
            }}>Home</button>
            <button className='footerButton' onClick={() => {
                values.toggleWindowDisplay();
            }}>Show Values</button>
        </div>
    )
}

export default FooterButtons
