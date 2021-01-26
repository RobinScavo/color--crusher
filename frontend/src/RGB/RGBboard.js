import React, { useContext} from 'react';

import KarenContext from '../KarenContext';
import ColorBall from './ColorBall';

import './RGBboard.css'

const RGBboard = () => {
    const values = useContext(KarenContext)
    const arr = values.colorArray;
    const target = values.colorTargetId;
    let kernelVisibility = values.kernelVisibility;
    let kernelLength = values.zenKernel.length;
    let kernelClassLength = 'shortKernel';
    let visibility = 'visible';

    //Arrays for ColorBall map
    let idArray = ['colorOne', 'colorTwo', 'colorThree', 'colorFour', 'colorFive', 'colorSix'];
    let delayArray =[0, 750, 600, 450, 300, 150];
    let indexArray = [0, 1, 2, 3, 4, 5]

    // Ghost-ball effect when clearing board
    if (!values.gameOn && values.round > 0) visibility = 'hidden';

    //Adjust font for kernel length
    if (kernelLength > 35 && kernelLength < 50) {
        kernelClassLength = 'longKernel'
    } else if  (kernelLength > 50) {
        kernelClassLength = 'realLongKernel'
    }

    return (
        <div className='lipDiv'>
            <div className='plateDiv' >
                {/* Set the balls */}
                {indexArray.map(index => (
                    <ColorBall
                        key={idArray[index]}
                        id={idArray[index]}
                        color={arr[index]}
                        delay={delayArray[index]}
                        blurred={arr[index].class}
                        visibility={visibility}
                        target={target}
                        correctGuess={values.correctGuess}
                        removeCoin={values.removeCoin}
                        gameOn={values.gameOn}
                        startConvert={values.startConvert}
                    />
                ))}
                <div className='targetColorDiv' >
                    {/* Start button */}
                    {!values.gameOn && values.round === 0 && !values.instructionModal && !values.startConvert && !values.startBattle &&
                        <button className='startButton' onClick={() => {
                            values.toggleInstructionModal()
                        }}>START</button>
                    }
                    {/* Clear button */}
                    {values.startConvert &&
                        <button className='startButton' onClick={() => {
                            values.correctGuess()
                        } }>Klear</button>
                    }
                    {/* Target color */}
                    {values.startBattle && values.gameOn && values.startBattle &&
                        <div className='targetDiv'>
                            <h2 className='colorText'>RGB</h2>
                            <h2 className='colorNumber'>{values.colorTarget}</h2>
                        </div>
                    }
                    {values.startBattle && !values.gameOn && values.round > 0 && !values.startZen &&
                        <div className='targetDiv'>
                            <h2 className='colorNumber'>CORRECT</h2>
                        </div>
                    }
                    {values.startZen &&
                        <div className='targetDiv'>
                            <div className='kernelDiv'>
                                <h2 className={`${kernelClassLength} ${kernelVisibility}`}>{values.zenKernel}</h2>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default RGBboard;
