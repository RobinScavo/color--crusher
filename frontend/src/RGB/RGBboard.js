import React, { useContext} from 'react';

import KarenContext from '../KarenContext';
import ColorBall from './ColorBall';
// import zenObject from '../PureFunctions';

import './RGBboard.css'

const RGBboard = () => {
    const values = useContext(KarenContext)
    const arr = values.colorArray;
    const target = values.colorTargetId;
    let kernelVisibility = values.kernelVisibility;
    let visibility = 'visible';

    //Arrays for ColorBall map
    let idArray = ['colorOne', 'colorTwo', 'colorThree', 'colorFour', 'colorFive', 'colorSix'];
    let delayArray =[0, 750, 600, 450, 300, 150];
    let indexArray = [0, 1, 2, 3, 4, 5]

    // Ghost-ball effect when clearing board
    if (!values.gameOn && values.round > 0) visibility = 'hidden';

    return (
        <div className='lipDiv'>

            {/* Flash target color on plate after correct guess */}
            <div className='plateDiv' >
            {/* style={{background: `radial-gradient(circle at 400px 550px, rgb${targetRGB}, rgb${targetRGBDarkness})`}} */}
                {/* Set the balls */}
                {indexArray.map(index => (
                    <ColorBall
                        key={idArray[index]}
                        id={idArray[index]}
                        color={arr[index]}
                        target={target}
                        correctGuess={values.correctGuess}
                        gameOn={values.gameOn}
                        delay={delayArray[index]}
                        removeCoin={values.removeCoin}
                        visibility={visibility}
                    />
                ))}
                {/* Start button */}
                {!values.gameOn && values.round === 0 && !values.instructionModal && !values.startZen && !values.startBattle &&
                    <button className='startButton' onClick={() => {
                        values.toggleInstructionModal()
                    }}>START</button>
                }
                {values.startBattle &&
                    <div className='targetColorDiv' >
                        {/* Target color */}
                        {values.gameOn && values.startBattle &&
                            <div className='targetDiv'>
                                <h2 className='colorText'>RGB</h2>
                                <h2 className='colorNumber'>{values.colorTarget}</h2>
                            </div>
                        }
                        {!values.gameOn && values.round > 0 && !values.startZen &&
                            <h2 className='colorNumber'>CORRECT</h2>
                        }
                    </div>
                }
                {values.startZen &&
                    <div className='kernelDiv'>
                        <h2 className='shortKernel' style={{visibility:`${kernelVisibility}`}}>{values.zenKernel}</h2>
                    </div>
                }
            </div>
        </div>
    )
}




export default RGBboard;


// style={{background: `radial-gradient(circle at 400px 550px, rgb${targetRGB}, rgb${targetRGBDarkness})`}}
