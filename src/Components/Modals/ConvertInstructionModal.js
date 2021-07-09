import React from 'react';

import './BattleInstructionModal.css';
import './ConvertInstructionModal.css';

const ConvertInstructionModal = (props) => {

    return (
        <div className='convertInstructionDiv'>

            <div className='explanationDiv'><span className='defSpan'>HSL (Hue, Saturation, Light)</span><br/>
                While RGB and Hex values use proportions
                of red, green and blue, HSL is based on color wheel position which is
                useful for finding color complements. Use the
                <span className='expSpan'> Color Converter </span>
                to convert your color values or find their compliments.
            </div>

            <div className='wheelDiv'>
                <div className='wheel'>
                    <h2 className='wheelLabel'>COMPLIMENT</h2>
                    <div className='wheelImage' alt='color wheel'></div>
                    <div className='wheelOverlayOne' alt='first overlay'></div>
                    <h3 className='imageCredit'
                        onClick={() => window.open('https://contentwriters.com/blog/psychology-color-content-marketing/')}>
                            Image credit: Deborah K.
                    </h3>
                </div>
                <div className='wheel'>
                    <div className='wheelImage'></div>
                    <div className='wheelOverlayTwo'></div>
                    <h2 className='wheelLabel triadicLabel'>TRIADIC</h2>
                </div>
                <div className='wheel'>
                    <h2 className='wheelLabel'>ANALOGOUS</h2>
                    <div className='wheelImage'></div>
                    <div className='wheelOverlayThree'></div>
                    <h2 className='wheelLabel'>SPLIT COMPLIMENT</h2>
                </div>
            </div>

            <button  className='gotItButton' onClick={() => {
                props.toggleConvertInstructionModal();
                props.toggleStartConvert();
                props.startGame();
              }}>Got it!</button>
        </div>
    )
}

export default ConvertInstructionModal
