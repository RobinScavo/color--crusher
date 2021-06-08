import React, { useContext, useState, useEffect } from 'react'

import ColorContext from '../../ColorContext'

import Bowl from '../Footer/Bowl';
import HighScoreDisplay from '../HighScoreDisplay/HighScoreDisplay';

import './ScoringModal.css'
import '../HighScoreDisplay/HighScoreDisplay.css'

const ScoringModal = () => {
    const values = useContext(ColorContext)

    const [score, setScore] = useState(values.score)
    const [coins, setCoins] = useState(values.coins)
    const [total, setTotal] = useState(0)
    const [speed, setSpeed] = useState(0)
    const [accuracy, setAccuracy] = useState(0)
    const [topCountdown, setTopCountdown] = useState(false)
    const [bottomCountdown, setBottomCountdown] = useState(false)

    const [isAnimating, setIsAnimating] = useState(false)
    const [isRaising, setIsRaising] = useState(false)
    const [isFlashing, setIsFlashing] = useState(false)
    const [totalIsFlashing, setTotalIsFlashing] = useState(false)
    const [topIsFalling, setTopIsFalling] = useState(false)
    const [middleIsFalling, setMiddleIsFalling] = useState(false)
    const [isHidden, setIsHidden] = useState(false)

    const futureTotal = values.score + values.coins

    useEffect(() => {
        setTimeout(() => {
            setTopCountdown(true)
        }, 1000)
    })

    //Speed countdown/countup
    useEffect(() => {
        let interval = null;
        if (score <= 0) setTopCountdown(false)
        if (score <= 0 && coins > 0) setBottomCountdown(true)
        if (topCountdown) {
            interval = setInterval(() => {
                setScore(score => score -1);
                setSpeed(speed => speed +1)
                return score
            }, 20);
        }
        return () => clearInterval(interval)
    }, [topCountdown, score, coins])

    //Accuracy countdown/countup
    useEffect(() => {
        let interval = null;
        if (coins <= 0) {
            setBottomCountdown(false)
            setIsAnimating(true)
        }

        if (bottomCountdown) {
            interval = setInterval(() => {
                setCoins(coins => coins -1)
                setAccuracy(accuracy => accuracy +1)
                return coins
            }, 50)
        }
        return () => clearInterval(interval)
    }, [bottomCountdown, coins])

    //Animate score totaling
    useEffect(() => {
        if (isAnimating) {
            setIsRaising(true)
            setTimeout(() => {
                setAccuracy(accuracy => accuracy *2)
                setIsFlashing(true)
            }, 600)
            setTimeout(() => {
                setTopIsFalling(true)
                setIsFlashing(false)
                setIsHidden(true)
            }, 1000)
            setTimeout(() => {
                setAccuracy(futureTotal)
                setIsFlashing(true)
            }, 1600)
            setTimeout(() => {
                setMiddleIsFalling(true)
            }, 2000)
            setTimeout(() => {
                setTotal(futureTotal)
                setTotalIsFlashing(true)
            }, 2600)
            setIsAnimating(false)
        }
    }, [isAnimating, speed, accuracy, futureTotal])

    let raising = isRaising ? 'raising' : ''
    let flashing = isFlashing ? 'flashing' : ''
    let totalFlashing = totalIsFlashing ? 'totalFlashing' : ''
    let topFalling = topIsFalling ? 'topFall' : ''
    let middleFalling = middleIsFalling ? 'middleFall' : ''
    let hidden = isHidden ? 'hidden' : ''

    return (
        <div className='scoringDiv'>
            <div className='scoringHalf'>
                <div className='bowlScoringDiv'>
                    <Bowl id='scoringBowlTop' display={score}/>
                    <h2 className='scoringLabelTop'>Speed</h2>
                    <Bowl id='scoringBowl' display={coins}/>
                    <h2 className='scoringLabel'>Accuracy</h2>
                </div>
                <div className='displayScoringDiv'>
                    <h2 className={`scoringDisplay topScore ${topFalling}`}>{speed}</h2>
                    <h2 className={`arithmetic topArith ${hidden}`}>+</h2>
                    <h2 className={`scoringDisplay bottomScore ${flashing} ${middleFalling}`}>{accuracy}</h2>
                    <h2 className={`arithmetic  bottomArith ${raising}`}>x 2</h2>
                    <div className={`totalDisplayDiv`}>
                        <h2 className={`totalDisplay ${totalFlashing}`}>{total}</h2>
                        <h3 className='totalLabel'>Total</h3>
                    </div>
                </div>
            </div>
            <HighScoreDisplay />
            <button id='playButton' className='backButton' onClick={() => {
                values.toggleScoringModal();
                values.newGame();
            }}>Play</button>
            <button id='homeButton' className='backButton' onClick={() => {
                values.toggleScoringModal();
                values.toggleMainModal();
            }}>Home</button>
            {/* <button id='testButton' className='backButton' onClick={() => {
                setIsHidden(false)
                setTopIsFalling(false)
                setMiddleIsFalling(false)
                setIsFlashing(false)
                setTotalIsFlashing(false)
                setIsRaising(false)
                setIsAnimating(false)
                setSpeed(0)
                setAccuracy(0)
                setScore(12)
                setCoins(15)
                setTotal(0)
                setTopCountdown(true)
            }}>Test</button> */}
        </div>
    )
}

export default ScoringModal;
