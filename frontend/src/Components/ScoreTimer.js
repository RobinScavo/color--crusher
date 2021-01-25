import React, { useContext, useState, useEffect } from 'react';

import KarenContext from '../KarenContext';
import './ScoreTimer.css'

const ScoreTimer = () => {
    const values = useContext(KarenContext);
    const update = values.updateTimer;

    const [seconds, setSeconds ] = useState(values.timer);

    useEffect(() => {
        let interval = null;
        if (values.gameOn && seconds > 0) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds -1);
                return seconds
            }, 1000);
        }
        if (!values.gameOn && seconds !== 15) {
            update(seconds);
            setSeconds(15);
        }
        return () => clearInterval(interval)
    }, [values.gameOn, seconds, update])


    return (
        <div>
            <div className='scoreTimerDiv'>
                {!values.startBattle &&
                    <h1 className='scoreTimer'>kk</h1>
                }
                {values.startBattle &&
                    <h1 className='scoreTimer'>{seconds}</h1>
                }
            </div>
        </div>
    )
}

export default ScoreTimer;
