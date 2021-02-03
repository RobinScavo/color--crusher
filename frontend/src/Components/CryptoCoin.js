import React, { useContext, useState, useEffect } from 'react';


import KarenContext from '../KarenContext';
import './CryptoCoin.css'

const CryptoCoin = (props) => {
    const values = useContext(KarenContext);
    const id = values.coinArray[props.index];
    const rolloutIdArray = ['cryptoOneRoll', 'cryptoTwoRoll', 'cryptoThreeRoll'];
    const fallIdArray = ['cryptoOneFall', 'cryptoTwoFall', 'cryptoThreeFall'];
    const coinContainerArray = ['coinContainerOne', 'coinContainerTwo', 'coinContainerThree'];
    const coinFlipperArray = ['coinFlipperOne', 'coinFlipperTwo', 'coinFlipperThree'];
    const containerId = coinContainerArray[props.index]
    const rolloutId = rolloutIdArray[props.index];
    const fallId = fallIdArray[props.index];
    const flipperId = coinFlipperArray[props.index];

    let rollout = '';
    let falling = '';

    const [isRolling, setisRolling] = useState(false)
    const [isFalling, setIsFalling] = useState(false)

    useEffect(() => {
        setisRolling(!id)
        if (isFalling) {
            setTimeout(() => {
                setIsFalling(false)
                console.log('falling')
            }, 2800)
        }
        if (!values.gameOn && values.round > 0) {
            setIsFalling(id)
        }
    }, [id, values.gameOn, values.round, isFalling])


    falling = isFalling ? fallId : '';
    rollout = isRolling ? rolloutId : '';

    return (
        <div className={`coinContainer ${containerId} ${rollout} ${falling}`}>
            <div className={`coinFlipper ${flipperId} ${rollout} ${falling}`}>
                <div className={`cryptoCoin ${props.className} cryptoCoinFront`}>kk</div>
                {/* <div className={`cryptoCoin ${props.className} cryptoCoinBack`}>bb</div> */}
            </div>
        </div>
    )
}

// onClick={() => setCoinFall(true)

export default CryptoCoin;


// {values.coinArray[1] && <h3 className='cryptoCoin'>kk</h3>}
// {values.coinArray[2] && <h3 className='cryptoCoin'>kk</h3>}
