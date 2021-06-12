import React, { useState } from 'react'

// import './ConvertContainer.css'
import './RightConvertPanel.css'

const RightConvertPanel = (props) => {
    const [togglePosition, setTogglePosition] = useState(false);
    const [disable, setDisable] = useState(false);

    const postition = togglePosition ? 'lowerPosition' : ''

    const disableButtons = () => {
        setDisable(true)
        if (!togglePosition) {
            setTimeout(() => {
                setDisable(false)
            }, 2200)
        }
    }

    return (
        <div className='convertDiv' id='rightConvert'>
            <div className='rightButtonDiv' >
                <div className='rightConvertTextDiv'>Create Random Colors</div>

                <button className='rightConvertButton'
                        disabled={disable}
                        onClick={() => {
                            disableButtons()
                            props.toggleCreateTriadic()
                } }>Triadic</button>

                <button className='rightConvertButton'
                        disabled={disable}
                        onClick={() => {
                            disableButtons()
                            props.toggleCreateAnalogous()
                }}>Analogous</button>

                <button className='rightConvertButton'
                        disabled={disable}
                        onClick={() => {
                            disableButtons()
                            props.toggleCreatePastel()
                }}>Pastel</button>

                <div className='repeatLabel'>Repeat</div>

                <div className='repeatToggle' onClick={() => {
                    setTogglePosition(!togglePosition)
                    if (togglePosition) {
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
