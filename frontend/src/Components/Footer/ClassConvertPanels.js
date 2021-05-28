import React from 'react'

import { HSLtoRGB, RGBtoHEX, HEXtoRGB, RGBtoHSL } from '../../PureFunctions'
import LeftConvertPanel from './LeftConvertPanel';
import RightConvertPanel from './RightConvertPanel';

import './ClassConvertPanels.css'

class ConvertPanels extends React.Component {
    constructor (props) {
        const rgbLabelArray = ['Red', 'Green', 'Blue'];
        const rgbInputArray = ['From 0 to 255', 'From 0 to 255', 'From 0 to 255'];
        const hslLabelArray = ['Hue', 'Saturation', 'Light'];
        const hslInputArray = ['From 0 to 360', 'From 0 to 100', 'From 0 to 100'];
        const hexLabelArray = ['Red', 'Green', 'Blue'];
        const hexInputArray = ['From 00 to FF', 'From 00 to FF', 'From 00 to FF']

        super(props);
        this.state = {
            setCustom: props.setCustom,

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

            rgbLabelArray: rgbLabelArray,
            rgbInputArray: rgbInputArray,
            hslLabelArray: hslLabelArray,
            hslInputArray: hslInputArray,
            hexLabelArray: hexLabelArray,
            hexInputArray: hexInputArray,

            // playerInput: '',

            toggleFromRgbButton: this.toggleFromRgbButton,
            toggleFromHslButton: this.toggleFromHslButton,
            toggleFromHexButton: this.toggleFromHexButton,
            toggleToRgbButton: this.toggleToRgbButton,
            toggleToHslButton: this.toggleToHslButton,
            toggleToHexButton: this.toggleToHexButton,
            playerSubmit: this.playerSubmit,
        }
    }

    playerSubmit = (playerInput) => {
        //if they missed a field then exit function
        for (let input of playerInput) {
            if (input.includes('From')) return
        }

        //validate input
        const tempInput = this.checkInput(playerInput)

        //display any input errors while retaining good ones
        this.setState({
            fromTopInput: `${tempInput[0]}`,
            fromMiddleInput: `${tempInput[1]}`,
            fromBottomInput: `${tempInput[2]}`,
        })

        let renderedColor = '';
        let displayedValue = '';

        //RGB to HSL
        if ((this.state.fromRgbButton  && this.state.toHslButton)) {
            renderedColor = tempInput.join(',');
            displayedValue = RGBtoHSL(renderedColor)

        //HSL to RGB
        } else if (this.state.fromHslButton && this.state.toRgbButton) {
            let stringHSL = `${tempInput[0]}, ${tempInput[1]}%, ${tempInput[2]}%`
            renderedColor = HSLtoRGB(stringHSL)
            displayedValue = tempInput.join(',')

        //Hex to RGB
        } else if (this.state.fromHexButton && this.state.toRgbButton) {
            renderedColor = HEXtoRGB(`#${tempInput.join('')}`);
            displayedValue = renderedColor;

        //RGB to HEX
        } else if (this.state.fromRgbButton && this.state.toHexButton) {
            renderedColor = tempInput.join(',');
            displayedValue = RGBtoHEX(tempInput.join(','))

        //HSL to HEX
        } else if (this.state.fromHslButton && this.state.toHexButton) {
            let stringHSL = `${tempInput[0]}, ${tempInput[1]}%, ${tempInput[2]}%`
            renderedColor = HSLtoRGB(stringHSL)
            displayedValue = RGBtoHEX(tempInput.join(','))

        //HEX to HSL
        } else if (this.state.fromHexButton && this.state.toHslButton) {
            renderedColor = HEXtoRGB(`#${tempInput.join('')}`);
            displayedValue = RGBtoHSL(renderedColor);
        }
        // else if ((this.state.fromRgbButton && this.state.toRgbButton) ||
        //            (this.state.fromHslButton && this.state.toHslButton) ||
        //            (this.state.fromHexButton && this.state.toHexButton)) {
        //                 renderedColor = tempInput;
        // }

        let displayArray = displayedValue.split(',')
        this.setState({
            toTopInput: `${displayArray[0]}`,
            toMiddleInput: `${displayArray[1]}`,
            toBottomInput: `${displayArray[2]}`,
        })
        this.state.setCustom(renderedColor);
    }

    //Player input validation
    checkInput = (playerInput) => {
        const result = [];

        //RGB input
        if (this.state.fromRgbButton) {
            for (let i = 0; i < 3; i++) {
                if (!Number(playerInput[i]) && Number(playerInput[i]) !== 0) {
                    result.push('From 0 to 255!')
                } else if (playerInput[i] < 0 || playerInput[i] > 255) {
                    result.push('From 0 to 255!')
                } else {
                    result.push(playerInput[i])
                }
            }
        }

        //HSL input
        if (this.state.fromHslButton) {
            if (playerInput[0] < 0 || playerInput[0] > 360 || !Number(playerInput[0])) {
                result.push('From 0 to 360')
            } else {
                result.push(playerInput[0])
            }
            if (playerInput[1] < 0 || playerInput[1] > 100 || !Number(playerInput[1])) {
                result.push('From 0 to 100')
            } else {
                result.push(playerInput[1])
            }
            if (playerInput[2] < 0 || playerInput[2] > 100 || !Number(playerInput[2])) {
                result.push('From 0 to 100')
            } else  {
                result.push(playerInput[2])
            }
        }

        //HEX input
        if (this.state.fromHexButton) {
            const validNumberInputs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            const validLetterInputs = ['A', 'B', 'C', 'D', 'E', 'F'];
            for (let i = 0; i < 3; i++) {
                if (playerInput[i].length !== 2) {
                    result.push('From 00 to FF')
                    continue;
                }
                if ((validNumberInputs.includes(Number(playerInput[i][0]))|| validLetterInputs.includes(playerInput[i][0])) &&
                    (validNumberInputs.includes(Number(playerInput[i][1])) || validLetterInputs.includes(playerInput[i][1]))) {
                    result.push(playerInput[i])
                } else {
                    result.push('From 00 to FF')
                }
            }
        }
        return result;
    }

    toggleFromRgbButton = () => {
        if (this.state.toRgbButton) this.setState ({
            toRgbButton: false,
            toHslButton: true,
        })
        if (this.state.fromRgbButton) return;
        if (this.state.fromHslButton) this.setState({fromHslButton: false})
        if (this.state.fromHexButton) this.setState({fromHexButton: false})
        this.setState ({
            fromRgbButton: true,
            fromTopLabel: this.state.rgbLabelArray[0],
            fromMiddleLabel: this.state.rgbLabelArray[1],
            fromBottomLabel: this.state.rgbLabelArray[2],
            fromTopInput: this.state.rgbInputArray[0],
            fromMiddleInput: this.state.rgbInputArray[1],
            fromBottomInput: this.state.rgbInputArray[2],
        }
    )}

    toggleFromHslButton = () => {
        if (this.state.toHslButton) this.setState ({
            toHslButton: false,
            toRgbButton: true,
        })
        if (this.state.fromRgbButton) this.setState({fromRgbButton: false})
        if (this.state.fromHexButton) this.setState({fromHexButton: false})
        this.setState ({
            fromHslButton: true,
            fromTopLabel: this.state.hslLabelArray[0],
            fromMiddleLabel: this.state.hslLabelArray[1],
            fromBottomLabel: this.state.hslLabelArray[2],
            fromTopInput: this.state.hslInputArray[0],
            fromMiddleInput: this.state.hslInputArray[1],
            fromBottomInput: this.state.hslInputArray[2],
        }
    )}

    toggleFromHexButton = () => {
        if (this.state.toHexButton) this.setState ({
            toHexButton: false,
            toRgbButton: true,
        })
        if (this.state.fromHslButton) this.setState({fromHslButton: false})
        if (this.state.fromRgbButton) this.setState({fromRgbButton: false})
        this.setState ({
            fromHexButton: true,
            fromTopLabel: this.state.hexLabelArray[0],
            fromMiddleLabel: this.state.hexLabelArray[1],
            fromBottomLabel: this.state.hexLabelArray[2],
            fromTopInput: this.state.hexInputArray[0],
            fromMiddleInput: this.state.hexInputArray[1],
            fromBottomInput: this.state.hexInputArray[2],
        }
    )}

    toggleToRgbButton = () => {
        if (this.state.fromRgbButton) return;
        if (this.state.toHexButton) this.setState({toHexButton: false})
        if (this.state.toHslButton) this.setState({toHslButton: false})
        this.setState ({
            toRgbButton: true,
            toTopLabel: this.state.rgbLabelArray[0],
            toMiddleLabel: this.state.rgbLabelArray[1],
            toBottomLabel: this.state.rgbLabelArray[2],
            toTopInput: this.state.rgbInputArray[0],
            toMiddleInput: this.state.rgbInputArray[1],
            toBottomInput: this.state.rgbInputArray[2],
        }
    )}

    toggleToHslButton = () => {
        if (this.state.fromHslButton) return;
        if (this.state.toHexButton) this.setState({toHexButton: false})
        if (this.state.toRgbButton) this.setState({toRgbButton: false})
        this.setState ({
            toHslButton: true,
            toTopLabel: this.state.hslLabelArray[0],
            toMiddleLabel: this.state.hslLabelArray[1],
            toBottomLabel: this.state.hslLabelArray[2],
            toTopInput: this.state.hslInputArray[0],
            toMiddleInput: this.state.hslInputArray[1],
            toBottomInput: this.state.hslInputArray[2],
        }
    )}

    toggleToHexButton = () => {
        if (this.state.fromHexButton) return;
        if (this.state.toRgbButton) this.setState({toRgbButton: false})
        if (this.state.toHslButton) this.setState({toHslButton: false})
        this.setState ({
            toHexButton: true,
            toTopLabel: this.state.hexLabelArray[0],
            toMiddleLabel: this.state.hexLabelArray[1],
            toBottomLabel: this.state.hexLabelArray[2],
            toTopInput: this.state.hexInputArray[0],
            toMiddleInput: this.state.hexInputArray[1],
            toBottomInput: this.state.hexInputArray[2],
        }
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
                    playerSubmit={this.state.playerSubmit}
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
