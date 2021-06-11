import React, { useContext } from 'react'

import ColorContext from '../../ColorContext'

import './Window.css'

const Window = () => {
    const values = useContext(ColorContext);

    const windowDisplay = values.windowDisplayed;
    let windowVisibility = false;
    windowVisibility = windowDisplay ? 'windowVisible' : 'windowHidden';

    const colorArray = values.colorArray;
    const slicedArray = [];
    const cheaterArray = ['windowOne', 'windowTwo', 'windowThree', 'windowFour', 'windowFive', 'windowSix']


    for (let i = 0; i < 6; i++) {
        let temp = colorArray[i].background
        let sliced = temp.slice(43, temp.length -8)
        slicedArray.push(sliced)
    }

    return (
        <>
            {values.startBattle &&
                <div className={`windowDiv ${windowVisibility}`}>
                    {cheaterArray.map(cheater => <div key={cheater.toString()} className={`window ${cheater}`} >
                        <div >Only Cheating</div>
                        <div >Yourself</div>
                    </div>)}
                </div>
            }

            {!values.startBattle &&
                <div className={`windowDiv ${windowVisibility}`}>
                    <div className='window windowOne'>
                        <div>RGB</div>
                        <div>{slicedArray[0]}</div>
                    </div>
                    <div className='window windowTwo'>
                        <div>RGB</div>
                        <div>{slicedArray[1]}</div>
                    </div>
                    <div className='window windowThree'>
                        <div>RGB</div>
                        <div>{slicedArray[2]}</div>
                    </div>
                    <div className='window windowFour'>
                        <div>RGB</div>
                        <div>{slicedArray[3]}</div>
                    </div>
                    <div className='window windowFive'>
                        <div>RGB</div>
                        <div>{slicedArray[4]}</div>
                    </div>
                    <div className='window windowSix'>
                        <div>RGB</div>
                        <div>{slicedArray[5]}</div>
                    </div>
                </div>
            }
        </>
    )
}


export default Window;
