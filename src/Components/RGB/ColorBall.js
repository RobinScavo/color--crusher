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

// class ColorBall extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             color: props.color,
//             id: props.id,
//             visibility: props.visibility,
//             target: null,
//             gameOn: false,
//             validTarget: true,
//             blurred: 'blurred',
//             startConvert: props.startConvert,
//             delay: props.delay,

//             correctGuess: props.correctGuess,
//             removeCoin: props.removeCoin
//         }
//     }

//     componentDidUpdate(prevProps) {
//         if (prevProps.color !== this.props.color) {
//             this.timeout = setTimeout(() => {
//                 this.setState({
//                     id: this.props.id,
//                     target: this.props.target,
//                     visibility: this.props.visibility,
//                     color: this.props.color,
//                     validTarget: true,
//                     startConvert: this.props.startConvert,
//                 })
//             }, this.state.delay)
//         }
//         if (prevProps.gameOn !== this.props.gameOn) {
//             this.setState({
//                 gameOn: this.props.gameOn
//             })
//         }
//     }



//     render() {
//         return (
//         <div
//             className={`colorBall ${this.state.visibility} ${this.state.blurred}`}
//             id={this.state.id}
//             onClick={() => this.checkGuess(this.state.id)}
//             style={this.state.color}
//         >
//         </div>
//         )
//     }
// }

export default ColorBall;
