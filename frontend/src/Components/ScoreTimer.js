import React, { useContext, useState, useEffect } from 'react';

import KarenContext from '../KarenContext';
import './ScoreTimer.css'

const ScoreTimer = () => {
    const values = useContext(KarenContext);
    const update = values.updateTimer;
    let falling = '';

    const [seconds, setSeconds ] = useState(values.timer);
    const [isFalling, setIsFalling] = useState(false)

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

    useEffect(() => {
        if (isFalling) {
            setTimeout(() => {
                setIsFalling(false)
            }, 2800)
        }
        if (!values.gameOn && values.round > 0) {
            setIsFalling(true)
        }
    }, [isFalling, values.gameOn, values.round])

    falling = isFalling ? 'scoreFall' : ''


    return (
        <div className={`scoreContainer ${falling}`}>
            <div className='scoreTimerDiv scoreTimerFront'>
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
