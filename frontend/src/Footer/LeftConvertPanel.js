import React, { useContext } from 'react'

import KarenContext from '../KarenContext'
import generateCustomColors from '../PureFunctions'

import './ClassConvertPanels.css'

const LeftConvertPanel = (props) => {
    const values = useContext(KarenContext);
    let fromRgbTopValue = '';
    let fromRgbMiddleValue = '';
    let fromRgbBottomValue = '';

    return (
        <div className='convertDiv' id='leftConvert'>
            <div className={`convertButtonDiv leftButtonDiv`} >
                <div className='upperButtonDiv'>

                    <div className='convertTextDiv'>Konvert From</div>
                    <button className={`convertButton ${props.fromRgbButton ? 'activeConvert' : 'hiddenConvert'}`} onClick={props.toggleFromRgbButton}
                        >RGB</button>
                    <button className={`convertButton ${props.fromHslButton ? 'activeConvert' : 'hiddenConvert'}`} onClick={props.toggleFromHslButton}
                        >HSL</button>
                    <button className={`convertButton ${props.fromHexButton ? 'activeConvert' : 'hiddenConvert'}`} onClick={props.toggleFromHexButton}
                        >HEX</button>
                    <div className={`convertArrow`}>➛</div>

                    <div className={`convertTextDiv`}>Konvert To</div>
                    <button className={`convertButton ${props.toRgbButton ? 'activeConvert' : 'hiddenConvert'}`} onClick={props.toggleToRgbButton}
                        >RGB</button>
                    <button className={`convertButton ${props.toHslButton ? 'activeConvert' : 'hiddenConvert'}`} onClick={props.toggleToHslButton}
                        >HSL</button>
                    <button className={`convertButton ${props.toHexButton ? 'activeConvert' : 'hiddenConvert'}`} onClick={props.toggleToHexButton}
                        >HEX</button>
                    <div className='convertArrow'>➛</div>
                </div>
            </div>
            <div >
                <div className='convertInputDiv'>
                    <label className='convertLabel'>
                        {props.fromTopLabel}
                        <input
                            className='convertInput'
                            type='text'
                            value={fromRgbTopValue}
                            placeholder={props.fromTopInput}
                            maxLength='3'
                            // onChange={e => setColorValue(e.target.value)}
                        />
                    </label>
                    <label className='convertLabel'>
                        {props.fromMiddleLabel}
                        <input
                            className='convertInput'
                            type='text'
                            value={fromRgbMiddleValue}
                            placeholder={props.fromMiddleInput}
                            // onChange={e => setColorValue(e.target.value)}
                        />
                    </label>
                    <label className='convertLabel'>
                        {props.fromBottomLabel}
                        <input
                            className='convertInput'
                            type='text'
                            value={fromRgbBottomValue}
                            placeholder={props.fromBottomInput}
                            // onChange={e => setColorValue(e.target.value)}
                        />
                    </label>
                    <button className='submitButton' onClick={props.playerSubmit}>Konvert</button>
                </div>
            </div>
        </div>
    )
}


export default LeftConvertPanel;
