import React, { useContext } from 'react'

import ColorContext from '../../ColorContext'


const ConvertInstructionModal = () => {
    const values = useContext(ColorContext);

    return (
        <button  className='silverButton' onClick={() => {
            values.toggleConvertInstructionModal();
            values.toggleStartConvert();
            values.startGame();
          }}>Got it!</button>
    )
}

export default ConvertInstructionModal
