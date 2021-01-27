import React, { useContext } from 'react'

import KarenContext from '../KarenContext'

import './ClassConvertPanels.css'

const RightConvertPanel = () => {
    const values = useContext(KarenContext)
    const tempArray =['333', '44', '55']

    return (
        <div className='convertDiv' id='rightConvert'>
            <div className='rightButtonDiv' >
                <div className='rightConvertTextDiv'>Kreate Random Kolors</div>
                <button className='rightConvertButton' onClick={() => {
                    values.toggleCreateTriadic();
                } }>Triadic</button>
                <button className='rightConvertButton' onClick={() => {
                    values.toggleCreateAnalogous();
                }}>Analogous</button>
                <button className='rightConvertButton' onClick={() => {
                    values.toggleCreatePastel();
                }}>Pastel</button>
            </div>
            <div className='rightConvertInputDiv'>
                <div className='convertBling  firstBling'></div>
                <div className='rightLabelDiv'>
                    <h1 className='rightLabel'>Hue</h1>
                    <h1 className='rightInput'>{tempArray[0]}</h1>
                </div>
                <div className='convertBling  secondBling'></div>
                <div className='rightLabelDiv'>
                    <h1 className='rightLabel'>Saturation</h1>
                    <h1 className='rightInput'>{tempArray[1]}</h1>
                </div>
                <div className='convertBling  thirdBling'></div>
                <div className='rightLabelDiv'>
                    <h1 className='rightLabel'>Light</h1>
                    <h1 className='rightInput'>{tempArray[2]}</h1>
                </div>
            </div>
        </div>
    )
}

export default RightConvertPanel;
