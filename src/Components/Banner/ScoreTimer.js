import React, {  useState, useEffect } from 'react';

import './ScoreTimer.css'
import '../RGB/GameContainer.css'

const ScoreTimer = (props) => {
    const update = props.updateTimer;
    let falling = '';

    const [seconds, setSeconds ] = useState(props.timer);
    const [isFalling, setIsFalling] = useState(false)

    useEffect(() => {
        let interval = null;
        if (props.gameOn && seconds > 0) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds -1);
                return seconds
            }, 1000);
        }
        if (!props.gameOn && seconds !== 15) {
            update(seconds);
            setSeconds(15);
        }
        return () => clearInterval(interval)
    }, [props.gameOn, seconds, update])

    useEffect(() => {
        if (props.gameOn && isFalling) {
            setTimeout(() => {
                setIsFalling(false)
            }, 2800)
        }
        if (!props.gameOn && props.round > 0) {
            setIsFalling(true)
        }
    }, [isFalling, props.gameOn, props.round])

    falling = isFalling ? 'scoreFall' : ''


    return (
        <div className={`scoreContainer ${falling}`}>
            <div className='scoreTimerDiv scoreTimerFront'>
                {!props.startBattle &&
                    <h1 className='scoreTimer'>cc</h1>
                }
                {props.startBattle &&
                    <h1 className='scoreTimer'>{seconds}</h1>
                }
            </div>
        </div>
    )
}

export default ScoreTimer;
