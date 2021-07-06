import React, { useContext } from 'react'

import ColorContext from '../../context/ColorContext';

import './FooterButtons.css'



const FooterButtons = () => {
    const values = useContext(ColorContext)

    const checkBattle = () => {
        if (values.startBattle) values.toggleStartBattle()
    }
    const checkConvert = () => {
        if (values.startConvert) values.toggleStartConvert()
    }

    return (
        <div className='footerButtonDiv'>
            <button className='footerButton' onClick={() => {
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
