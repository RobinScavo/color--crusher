import React, { useContext, useState, useEffect } from 'react';

import ColorContext from '../../context/ColorContext';
import './CryptoCoin.css'

const CryptoCoin = (props) => {
    const values = useContext(ColorContext);
    const id = values.coinArray[props.index];
    const rolloutIdArray = ['cryptoOneRoll', 'cryptoTwoRoll', 'cryptoThreeRoll'];
    const fallIdArray = ['cryptoOneFall', 'cryptoTwoFall', 'cryptoThreeFall'];
    const coinContainerArray = ['coinContainerOne', 'coinContainerTwo', 'coinContainerThree'];
    const containerId = coinContainerArray[props.index]
    const rolloutId = rolloutIdArray[props.index];
    const fallId = fallIdArray[props.index];

    let rollout = '';
    let falling = '';

    const [isRolling, setisRolling] = useState(false)
    const [isFalling, setIsFalling] = useState(false)

    useEffect(() => {
        setisRolling(!id)
        if (values.gameOn && isFalling) {
            setTimeout(() => {
                setIsFalling(false)
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
            <div className={`cryptoCoin ${props.className} cryptoCoinFront`}>cc</div>
        </div>
    )
}

export default CryptoCoin;
