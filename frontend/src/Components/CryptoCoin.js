import React, { useContext, useState, useEffect } from 'react';


import KarenContext from '../KarenContext';
import './CryptoCoin.css'

const CryptoCoin = (props) => {
    const values = useContext(KarenContext);
    const id = values.coinArray[props.index];
    const rolloutIdArray = ['cryptoOneRoll', 'cryptoTwoRoll', 'cryptoThreeRoll'];
    const fallIdArray = ['cryptoOneFall', 'cryptoTwoFall', 'cryptoThreeFall'];
    const rolloutId =rolloutIdArray[props.index];
    const fallId =fallIdArray[props.index];
    let rollout = '';
    let falling = '';

    const [isRolling, setisRolling] = useState(false)
    const [isFalling, setIsFalling] = useState(false)

    useEffect(() => {
        setisRolling(!id)
        setTimeout(() => {
            setIsFalling(false)
        }, 3500)
        if (!values.gameOn && values.round > 0) {
            setIsFalling(id)
        }
    }, [id, values.gameOn, values.round])


    falling = isFalling ? fallId : '';
    rollout = isRolling ? rolloutId : '';

    return (
        <>
            <h3 className={`cryptoCoin ${props.className} ${rollout} ${falling}`}>kk</h3>
        </>
    )
}

// onClick={() => setCoinFall(true)

export default CryptoCoin;


// {values.coinArray[1] && <h3 className='cryptoCoin'>kk</h3>}
// {values.coinArray[2] && <h3 className='cryptoCoin'>kk</h3>}
