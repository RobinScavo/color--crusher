import React from 'react'

import './FooterButtons.css'

const FooterButtons = (props) => {

    const checkBattle = () => {
        if (props.startBattle) props.toggleStartBattle()
    }
    const checkConvert = () => {
        if (props.startConvert) props.toggleStartConvert()
    }

    return (
        <div className='footerButtonDiv'>
            <button className='footerButton' onClick={() => {
                checkBattle();
                checkConvert();
                props.clearRounds();
                props.toggleGameOn();
            }}>Home</button>
            <button className='footerButton' onClick={() => {
                props.toggleWindowDisplay();
            }}>Show Values</button>
        </div>
    )
}

export default FooterButtons
