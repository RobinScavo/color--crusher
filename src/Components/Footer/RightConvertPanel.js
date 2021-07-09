import React, { useState } from 'react'

import './RightConvertPanel.css'

const RightConvertPanel = (props) => {
    const [disable, setDisable] = useState(false);
    const [triadicRepeating, setTriadicRepeating] = useState('')
    const [analogousRepeating, setAnalogousRepeating] = useState('')
    const [pastelRepeating, setPastelRepeating] = useState('')

    const postition = props.togglePosition ? 'lowerPosition' : ''

    const disableButtons = () => {
        setDisable(true)
        if (!props.togglePosition) {
            setTimeout(() => {
                setDisable(false)
            }, 2200)
        }
    }

    const clearRepeat = () => {
        setTriadicRepeating('')
        setAnalogousRepeating('')
        setPastelRepeating('')
    }

    return (
        <div className='convertDiv' id='rightConvert'>
            <div className='rightButtonDiv' >
                <div className='rightConvertTextDiv'>Create Random Colors</div>

                <button className={`rightConvertButton ${triadicRepeating}`}
                        disabled={disable}
                        onClick={() => {
                            disableButtons()
                            props.toggleCreateTriadic()
                            if (props.repeatRender) {
                                clearRepeat()
                                setTriadicRepeating('repeating')
                            }
                } }>Triadic</button>

                <button className={`rightConvertButton ${analogousRepeating}`}
                        disabled={disable}
                        onClick={() => {
                            disableButtons()
                            props.toggleCreateAnalogous()
                            if (props.repeatRender) {
                                clearRepeat()
                                setAnalogousRepeating('repeating')
                            }
                }}>Analogous</button>

                <button className={`rightConvertButton ${pastelRepeating}`}
                        disabled={disable}
                        onClick={() => {
                            disableButtons()
                            props.toggleCreatePastel()
                            if (props.repeatRender) {
                                clearRepeat()
                                setPastelRepeating('repeating')
                            }

                }}>Pastel</button>

                <div className='repeatLabel'>Repeat</div>

                <div className='repeatToggle' onClick={() => {
                    props.toggleTogglePosition()
                    if (props.togglePosition) {
                        clearRepeat()
                        setDisable(false)
                    }
                    props.toggleRepeatRender()
                }}>
                    <div className='toggleText'>On</div>
                    <div className='toggleText'>Off</div>
                    <div className={`innerToggle ${postition}`}></div>
                </div>
            </div>

            <div className='rightConvertInputDiv'>
                <div className='convertBling  firstBling'></div>
                <div className='rightLabelDiv'>
                    <h1 className='rightLabel'>{props.toTopLabel}</h1>
                    <h1 className='rightInput'>{props.toTopInput}</h1>
                </div>
                <div className='convertBling  secondBling'></div>
                <div className='rightLabelDiv'>
                    <h1 className='rightLabel'>{props.toMiddleLabel}</h1>
                    <h1 className='rightInput'>{props.toMiddleInput}</h1>
                </div>
                <div className='convertBling  thirdBling'></div>
                <div className='rightLabelDiv'>
                    <h1 className='rightLabel'>{props.toBottomLabel}</h1>
                    <h1 className='rightInput'>{props.toBottomInput}</h1>
                </div>
            </div>
        </div>
    )
}

export default RightConvertPanel;
