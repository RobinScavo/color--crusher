import React, { useState } from 'react'

import './ConvertPanel.css'

const RightConvertPanel = () => {
    const [colorValue, setColorValue] = useState('')

    const handleSubmit= (evt) => {
        evt.preventDefault();
    }
    return (
        <div className='convertDiv' id='rightConvert'>
            <div className='rightButtonDiv' >
                <div className='rightConvertTextDiv'>Kreate Random Kolors</div>
                <button className='rightConvertButton'>Triadic</button>
                <button className='rightConvertButton'>Analogous</button>
                <button className='rightConvertButton'>Pastel</button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='rightConvertInputDiv'>
                    <div className='convertBling  firstBling'></div>
                    <label className='convertLabel'>
                        HUE
                        <input
                            className='rightConvertInput'
                            type='text'
                            value={colorValue}
                            onChange={e => setColorValue(e.target.value)}
                        />
                    </label>
                    <div className='convertBling secondBling'></div>
                    <label className='convertLabel'>
                        SATURATION
                        <input
                            className='rightConvertInput'
                            type='text'
                            value={colorValue}
                            onChange={e => setColorValue(e.target.value)}
                        />
                    </label>
                    <div className='convertBling thirdBling'></div>
                    <label className='convertLabel'>
                        LIGHT
                        <input
                            className='rightConvertInput'
                            type='text'
                            value={colorValue}
                            onChange={e => setColorValue(e.target.value)}
                        />
                    </label>
                </div>
            </form>
        </div>
    )
}

export default RightConvertPanel;
