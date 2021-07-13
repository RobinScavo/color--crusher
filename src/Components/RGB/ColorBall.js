import React, { useState, useEffect } from 'react'

import './ColorBall.css'

const ColorBall = (props) => {
    const target = props.target;
    const startConvert = props.startConvert;
    const id = props.id;

    const [visibility, setVisibility] = useState(props.visibility);
    const [validTarget, setValidTarget] = useState(true);
    const [color, setColor] = useState(props.color);

    const checkGuess = (id) => {
        if (!props.gameOn) return;
        if (startConvert) return;
        if (target === id) {
            setColor({})
            props.correctGuess();
            return;
        } else {
            setVisibility('hidden')
            setValidTarget(false);
            setColor({})
        }
        if (validTarget) {
            props.removeCoin()
        }
    }

    useEffect(() => {
        let delayRender = setTimeout(() => {
            setColor(props.color);
            setVisibility(props.visibility)
            setValidTarget(true)
        }, props.delay)
        return () => clearTimeout(delayRender)
    }, [props.color, props.visibility, props.delay])

    return (
        <div
            className={`colorBall ${visibility}`}
            id={id}
            onClick={() => checkGuess(props.id)}
            style={color}
        >
        </div>
    )
}

export default ColorBall;
