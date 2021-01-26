import React, { useState } from 'react'

import './ConvertPanel.css'

const LeftConvertPanel = () => {
    const [colorValue, setColorValue] = useState('')

    const handleSubmit= (evt) => {
        evt.preventDefault();
    }
    return (
        <div className='convertDiv' id='leftConvert'>
            <div className={`convertButtonDiv leftButtonDiv`} >
                <div className='upperButtonDiv'>
                    <div className='convertTextDiv'>Konvert From</div>
                    <button className='convertButton'>RGB</button>
                    <button className='convertButton'>HSL</button>
                    <button className='convertButton'>HEX</button>
                    <div className='convertArrow'>➛</div>
                    <div className='convertTextDiv'>Konvert To</div>
                    <button className='convertButton'>RGB</button>
                    <button className='convertButton'>HSL</button>
                    <button className='convertButton'>HEX</button>
                    <div className='convertArrow'>➛</div>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='convertInputDiv'>
                    <label className='convertLabel'>
                        RED
                        <input
                            className='convertInput'
                            type='text'
                            value={colorValue}
                            onChange={e => setColorValue(e.target.value)}
                        />
                    </label>
                    <label className='convertLabel'>
                        GREEN
                        <input
                            className='convertInput'
                            type='text'
                            value={colorValue}
                            onChange={e => setColorValue(e.target.value)}
                        />
                    </label>
                    <label className='convertLabel'>
                        BLUE
                        <input
                            className='convertInput'
                            type='text'
                            value={colorValue}
                            onChange={e => setColorValue(e.target.value)}
                        />
                    </label>
                    <button className='submitButton'>Konvert</button>
                </div>
            </form>
        </div>
    )
}


export default LeftConvertPanel;
