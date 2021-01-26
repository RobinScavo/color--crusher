import React from 'react'

import './ColorBall.css'

class ColorBall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            id: props.id,
            visibility: props.visibility,
            target: null,
            gameOn: false,
            validTarget: true,
            blurred: 'blurred',
            startConvert: props.startConvert,
            delay: props.delay,

            correctGuess: props.correctGuess,
            removeCoin: props.removeCoin
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.color !== this.props.color) {
            this.timeout = setTimeout(() => {
                this.setState({
                    id: this.props.id,
                    target: this.props.target,
                    visibility: this.props.visibility,
                    color: this.props.color,
                    validTarget: true,
                    startConvert: this.props.startConvert,
                })
            }, this.state.delay)
        }
        if (prevProps.gameOn !== this.props.gameOn) {
            this.setState({
                gameOn: this.props.gameOn
            })
        }
    }

    checkGuess = (id) => {
        if (!this.state.gameOn) return;
        if (this.props.startConvert) return;
        console.log(this.state.startConvert)
        if (this.state.target === id) {
            this.setState({color: {}})
            this.state.correctGuess();
        } else {
            this.setState({
                color: {},
                visibility: 'hidden',
                validTarget: false,
            })
        }
        if (this.state.validTarget) {
            this.state.removeCoin()
        }
    }

    render() {
        return (
        <div
            className={`colorBall ${this.state.visibility} ${this.state.blurred}`}
            id={this.state.id}
            onClick={() => this.checkGuess(this.state.id)}
            style={this.state.color}
        >
        </div>
        )
    }
}

export default ColorBall;
