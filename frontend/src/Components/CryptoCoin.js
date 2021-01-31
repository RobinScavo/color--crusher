import React, { useContext, useState, useEffect } from 'react';


import KarenContext from '../KarenContext';
import './CryptoCoin.css'

const CryptoCoin = (props) => {
    const values = useContext(KarenContext);
    const id = values.coinArray[props.index];
    const rolloutIArray = ['cryptoOneRoll', 'cryptoTwoRoll', 'cryptoThreeRoll'];
    const rolloutId =rolloutIArray[props.index];
    let rollout = 'cat';


    const [isVisible, setIsVisible] = useState(id)

    useEffect(() => {
        setIsVisible(id)
    }, [id])
    console.log('IIIIIIII', id, rolloutId)

    rollout = isVisible ? '' : rolloutId

    return (
        <>
            <h3 className={`cryptoCoin ${props.className} ${rollout}`}>kk</h3>
        </>
    )
}

export default CryptoCoin;


// {values.coinArray[1] && <h3 className='cryptoCoin'>kk</h3>}
// {values.coinArray[2] && <h3 className='cryptoCoin'>kk</h3>}
