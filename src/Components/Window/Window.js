import React from 'react'

import './Window.css'

const Window = (props) => {
    const windowDisplay = props.windowDisplayed;
    let windowVisibility = false;
    windowVisibility = windowDisplay ? 'windowVisible' : 'windowHidden';

    const colorArray = props.colorArray;
    const slicedArray = [];
    const cheaterArray = ['windowOne', 'windowTwo', 'windowThree', 'windowFour', 'windowFive', 'windowSix']

    if(colorArray[0]) {
        for (let i = 0; i < 6; i++) {
            let temp = colorArray[i].background
            let sliced = temp.slice(43, temp.length -8)
            slicedArray.push(sliced)
        }
    }

    return (
        <>
            {props.startBattle &&
                <div className={`windowDiv ${windowVisibility}`}>
                    {cheaterArray.map(cheater => <div key={cheater.toString()} className={`window ${cheater}`} >
                        <div >Only Cheating</div>
                        <div >Yourself</div>
                    </div>)}
                </div>
            }

            {!props.startBattle &&
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
