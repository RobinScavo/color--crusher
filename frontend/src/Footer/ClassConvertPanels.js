import React from 'react'

import LeftConvertPanel from './LeftConvertPanel';
import RightConvertPanel from './RightConvertPanel';

import './ClassConvertPanels.css'

class ConvertPanels extends React.Component {
    constructor (props) {
        const rgbLabelArray = ['Red', 'Green', 'Blue'];
        const rgbInputArray = ['From 0 to 255', 'From 0 to 255', 'From 0 to 255'];
        const hslLabelArray = ['Hue', 'Saturation', 'Light'];
        const hslInputArray = ['From 0 to 360', 'From 0 to 100', 'From 0 to 100'];


        super(props);
        this.state = {
            fromRgbButton: true,
            fromHslButton: false,
            fromHexButton: false,

            toRgbButton: false,
            toHslButton: true,
            toHexButton: false,

            fromTopLabel: rgbLabelArray[0],
            fromMiddleLabel: rgbLabelArray[1],
            fromBottomLabel: rgbLabelArray[2],

            fromTopInput: rgbInputArray[0],
            fromMiddleInput: rgbInputArray[1],
            fromBottomInput: rgbInputArray[2],

            toTopLabel: hslLabelArray[0],
            toMiddleLabel: hslLabelArray[1],
            toBottomLabel: hslLabelArray[2],

            toTopInput: hslInputArray[0],
            toMiddleInput: hslInputArray[1],
            toBottomInput: hslInputArray[2],

            toggleFromRgbButton: this.toggleFromRgbButton,
            toggleFromHslButton: this.toggleFromHslButton,
            toggleFromHexButton: this.toggleFromHexButton,
            toggleToRgbButton: this.toggleToRgbButton,
            toggleToHslButton: this.toggleToHslButton,
            toggleToHexButton: this.toggleToHexButton,
        }
    }

    toggleFromRgbButton = () => {
        if (this.state.fromHslButton) this.setState({fromHslButton: false})
        if (this.state.fromHexButton) this.setState({fromHexButton: false})
        this.setState ({fromRgbButton: !this.state.fromRgbButton}
    )}
    toggleFromHslButton = () => {
        if (this.state.fromRgbButton) this.setState({fromRgbButton: false})
        if (this.state.fromHexButton) this.setState({fromHexButton: false})
        this.setState ({fromHslButton: !this.state.fromHslButton}
    )}
    toggleFromHexButton = () => {
        if (this.state.fromHslButton) this.setState({fromHslButton: false})
        if (this.state.fromRgbButton) this.setState({fromRgbButton: false})
        this.setState ({fromHexButton: !this.state.fromHexButton}
    )}
    toggleToRgbButton = () => {
        if (this.state.toHexButton) this.setState({toHexButton: false})
        if (this.state.toHslButton) this.setState({toHslButton: false})
        this.setState ({toRgbButton: !this.state.toRgbButton}
    )}
    toggleToHslButton = () => {
        if (this.state.toHexButton) this.setState({toHexButton: false})
        if (this.state.toRgbButton) this.setState({toRgbButton: false})
        this.setState ({toHslButton: !this.state.toHslButton}
    )}
    toggleToHexButton = () => {
        if (this.state.toRgbButton) this.setState({toRgbButton: false})
        if (this.state.toHslButton) this.setState({toHslButton: false})
        this.setState ({toHexButton: !this.state.toHexButton}
    )}

    render () {
        return (
            <>
                <LeftConvertPanel
                    fromRgbButton={this.state.fromRgbButton}
                    fromHslButton={this.state.fromHslButton}
                    fromHexButton={this.state.fromHexButton}
                    toRgbButton={this.state.toRgbButton}
                    toHslButton={this.state.toHslButton}
                    toHexButton={this.state.toHexButton}

                    fromTopLabel={this.state.fromTopLabel}
                    fromMiddleLabel={this.state.fromMiddleLabel}
                    fromBottomLabel={this.state.fromBottomLabel}
                    fromTopInput={this.state.fromTopInput}
                    fromMiddleInput={this.state.fromMiddleInput}
                    fromBottomInput={this.state.fromBottomInput}

                    toggleFromRgbButton={this.state.toggleFromRgbButton}
                    toggleFromHslButton={this.state.toggleFromHslButton}
                    toggleFromHexButton={this.state.toggleFromHexButton}
                    toggleToRgbButton={this.state.toggleToRgbButton}
                    toggleToHslButton={this.state.toggleToHslButton}
                    toggleToHexButton={this.state.toggleToHexButton}
                />
                <RightConvertPanel
                    toTopLabel={this.state.toTopLabel}
                    toMiddleLabel={this.state.toMiddleLabel}
                    toBottomLabel={this.state.toBottomLabel}
                    toTopInput={this.state.toTopInput}
                    toMiddleInput={this.state.toMiddleInput}
                    toBottomInput={this.state.toBottomInput}
                />
            </>
        )
    }
}

export default ConvertPanels;
