import React, { useContext } from 'react';

import ColorContext from '../../context/ColorContext';
import ColorBall from './ColorBall';

import './GameContainer.css'
import '../Modals/ConvertInstructionModal.css'

const GameContainer = () => {
    const values = useContext(ColorContext)
    const arr = values.colorArray;
    const target = values.colorTargetId;

    //Arrays for ColorBall map
    let idArray = ['colorOne', 'colorTwo', 'colorThree', 'colorFour', 'colorFive', 'colorSix'];
    let delayArray =[0, 750, 600, 450, 300, 150];
    let indexArray = [0, 1, 2, 3, 4, 5];

    return (
        <div className={`lipDiv`}>
            <div className='plateDiv' >
                {/* Set the balls */}
                {indexArray.map(index => (
                    <ColorBall
                        key={idArray[index]}
                        id={idArray[index]}
                        color={arr[index]}
                        delay={delayArray[index]}
                        target={target}
                        correctGuess={values.correctGuess}
                        removeCoin={values.removeCoin}
                        gameOn={values.gameOn}
                        startConvert={values.startConvert}
                        visibility='visible'
                    />
                ))}

                <div className='targetColorDiv' >

                    {/* Start button */}
                     {!values.startConvert &&
                     !values.startBattle &&
                        <button className='startButton' onClick={() => {
                            values.toggleMainModal()
                        }}>START</button>
                    }

                    {/* Color Wheel */}
                    {values.startConvert &&
                        <div className='plateWheel'></div>
                    }

                    {/* Target color */}
                    {values.startBattle &&
                     values.gameOn &&
                        <div className='targetDiv'>
                            <h2 className='colorText'>RGB</h2>
                            <h2 className='colorNumber'>{values.colorTarget}</h2>
                        </div>
                    }

                    {/* 'Correct' message */}
                    {values.startBattle &&
                     values.round > 0 &&
                     !values.gameOn &&
                        <div className='targetDiv'>
                            <h2 className='colorNumber'>CORRECT</h2>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default GameContainer;
