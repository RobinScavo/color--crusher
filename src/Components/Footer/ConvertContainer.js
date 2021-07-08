import React, { useState, useContext } from 'react'

import ColorContext from '../../context/ColorContext';
import { HSLtoRGB, RGBtoHEX, HEXtoRGB, RGBtoHSL } from '../../pureFunctions'
import LeftConvertPanel from './LeftConvertPanel';
import RightConvertPanel from './RightConvertPanel';

const ConvertContainer = () => {
    const values = useContext(ColorContext);

    const rgbLabelArray = ['Red', 'Green', 'Blue'];
    const rgbInputArray = ['From 0 to 255', 'From 0 to 255', 'From 0 to 255'];
    const hslLabelArray = ['Hue', 'Saturation', 'Light'];
    const hslInputArray = ['From 0 to 360', 'From 0 to 100', 'From 0 to 100'];
    const hexLabelArray = ['Red', 'Green', 'Blue'];
    const hexInputArray = ['From 00 to FF', 'From 00 to FF', 'From 00 to FF'];

    const [togglePosition, setTogglePosition] = useState(false);

    const [fromRgbButton, setFromRgbButton] = useState(true)
    const [fromHslButton, setFromHslButton] = useState(false)
    const [fromHexButton, setFromHexButton] = useState(false)

    const [toRgbButton, setToRgbButton] = useState(false)
    const [toHslButton, setToHslButton] = useState(true)
    const [toHexButton, setToHexButton] = useState(false)

    const [fromTopLabel, setFromTopLabel] = useState(rgbLabelArray[0])
    const [fromMiddleLabel, setFromMiddleLabel] = useState(rgbLabelArray[1])
    const [fromBottomLabel, setFromBottomLabel] = useState(rgbLabelArray[2])

    const [fromTopInput, setFromTopInput] = useState(rgbInputArray[0])
    const [fromMiddleInput, setFromMiddleInput] = useState(rgbInputArray[1])
    const [fromBottomInput, setFromBottomInput] = useState(rgbInputArray[2])

    const [toTopLabel, setToTopLabel] = useState(hslLabelArray[0])
    const [toMiddleLabel, setToMiddleLabel] = useState(hslLabelArray[1])
    const [toBottomLabel, setToBottomLabel] = useState(hslLabelArray[2])

    const [toTopInput, setToTopInput] = useState(hslInputArray[0])
    const [toMiddleInput, setToMiddleInput] = useState(hslInputArray[1])
    const [toBottomInput, setToBottomInput] = useState(hslInputArray[2])

    const toggleTogglePosition = () => {setTogglePosition(!togglePosition)}

    const toggleFromRgbButton = () => {
        if (toRgbButton) {
            setToRgbButton(false)
            setToHslButton(true)
        }
        if (fromRgbButton) return;
        if (fromHslButton) setFromHslButton(false)
        if (fromHexButton) setFromHexButton(false)

        setFromRgbButton(true)
        setFromTopLabel(rgbLabelArray[0])
        setFromMiddleLabel(rgbLabelArray[1])
        setFromBottomLabel(rgbLabelArray[2])
        setFromTopInput(rgbInputArray[0])
        setFromMiddleInput(rgbInputArray[1])
        setFromBottomInput(rgbInputArray[2])
    }

    const toggleFromHslButton = () => {
        if (toHslButton) {
            setToHslButton(false)
            setToRgbButton(true)
        }
        if (fromRgbButton) setFromRgbButton(false)
        if (fromHexButton) setFromHexButton(false)

        setFromHslButton(true)
        setFromTopLabel(hslLabelArray[0])
        setFromMiddleLabel(hslLabelArray[1])
        setFromBottomLabel(hslLabelArray[2])
        setFromTopInput(hslInputArray[0])
        setFromMiddleInput(hslInputArray[1])
        setFromBottomInput(hslInputArray[2])
    }

    const toggleFromHexButton = () => {
        if (toHexButton) {
            setToHexButton(false)
            setToRgbButton(true)
        }
        if (fromHslButton) setFromHslButton(false)
        if (fromRgbButton) setFromRgbButton(false)

        setFromHexButton(true)
        setFromTopLabel(hexLabelArray[0])
        setFromMiddleLabel(hexLabelArray[1])
        setFromBottomLabel(hexLabelArray[2])
        setFromTopInput(hexInputArray[0])
        setFromMiddleInput(hexInputArray[1])
        setFromBottomInput(hexInputArray[2])
    }

    const toggleToRgbButton = () => {
        if (fromRgbButton) return
        if (toHexButton) setToHexButton(false)
        if (toHslButton) setToHslButton(false)

        setToRgbButton(true)
        setToTopLabel(rgbLabelArray[0])
        setToMiddleLabel(rgbLabelArray[1])
        setToBottomLabel(rgbLabelArray[2])
        setToTopInput(rgbInputArray[0])
        setToMiddleInput(rgbInputArray[1])
        setToBottomInput(rgbInputArray[2])
    }

    const toggleToHslButton = () => {
        if (fromHslButton) return
        if (toHexButton) setToHexButton(false)
        if (toRgbButton) setToRgbButton(false)

        setToHslButton(true)
        setToTopLabel(hslLabelArray[0])
        setToMiddleLabel(hslLabelArray[1])
        setToBottomLabel(hslLabelArray[2])
        setToTopInput(hslInputArray[0])
        setToMiddleInput(hslInputArray[1])
        setToBottomInput(hslInputArray[2])
    }

    const toggleToHexButton = () => {
        if (fromHexButton) return
        if (toRgbButton) setToRgbButton(false)
        if (toHslButton) setToHslButton(false)

        setToHexButton(true)
        setToTopLabel(hexLabelArray[0])
        setToMiddleLabel(hexLabelArray[1])
        setToBottomLabel(hexLabelArray[2])
        setToTopInput(hexInputArray[0])
        setToMiddleInput(hexInputArray[1])
        setToBottomInput(hexInputArray[2])
    }

    const playerSubmit = (playerInput) => {
        //if they missed a field then exit function
        for (let input of playerInput) {
            if (input.includes('From')) return
        }

        //validate input
        const tempInput = checkInput(playerInput)

        //display any input errors while retaining good ones
        setFromTopInput(`${tempInput[0]}`)
        setFromMiddleInput(`${tempInput[1]}`)
        setFromBottomInput(`${tempInput[2]}`)

        let renderedColor = '';
        let displayedValue = '';

        //RGB to HSL
        if ((fromRgbButton  && toHslButton)) {
            renderedColor = tempInput.join(', ');
            displayedValue = RGBtoHSL(renderedColor)

        //HSL to RGB
        } else if (fromHslButton && toRgbButton) {
            let stringHSL = `${tempInput[0]}, ${tempInput[1]}%, ${tempInput[2]}%`
            renderedColor = HSLtoRGB(stringHSL);
            displayedValue = renderedColor;

        //Hex to RGB
        } else if (fromHexButton && toRgbButton) {
            renderedColor = HEXtoRGB(`#${tempInput.join('')}`);
            displayedValue = renderedColor;

        //RGB to HEX
        } else if (fromRgbButton && toHexButton) {
            renderedColor = tempInput.join(', ');
            displayedValue = RGBtoHEX(tempInput.join(','))

        //HSL to HEX
        } else if (fromHslButton && toHexButton) {
            let stringHSL = `${tempInput[0]}, ${tempInput[1]}%, ${tempInput[2]}%`
            renderedColor = HSLtoRGB(stringHSL)
            displayedValue = RGBtoHEX(renderedColor)

        //HEX to HSL
        } else if (fromHexButton && toHslButton) {
            renderedColor = HEXtoRGB(`#${tempInput.join('')}`);
            displayedValue = RGBtoHSL(renderedColor);
        }

        //display converted values
        let displayArray = displayedValue.split(',')
        setToTopInput(`${displayArray[0]}`)
        setToMiddleInput(`${displayArray[1]}`)
        setToBottomInput(`${displayArray[2]}`)

        //render player color with compliments
        values.setCustomColor(renderedColor);
    }

    const checkInput = (playerInput) => {
        const result = [];

        //RGB input
        if (fromRgbButton) {
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
        if (fromHslButton) {
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
        if (fromHexButton) {
            const validNumberInputs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            const validLetterInputs = ['A', 'B', 'C', 'D', 'E', 'F'];
            for (let i = 0; i < 3; i++) {
                if (playerInput[i].length !== 2) {
                    result.push('From 00 to FF')
                    continue;
                }
                if ((validNumberInputs.includes(Number(playerInput[i][0]))||
                     validLetterInputs.includes(playerInput[i][0])) &&
                    (validNumberInputs.includes(Number(playerInput[i][1])) ||
                     validLetterInputs.includes(playerInput[i][1]))) {
                    result.push(playerInput[i])
                } else {
                    result.push('From 00 to FF')
                }
            }
        }
        return result;
    }

    return (
        <>
            <LeftConvertPanel
                fromRgbButton={fromRgbButton}
                fromHslButton={fromHslButton}
                fromHexButton={fromHexButton}
                toRgbButton={toRgbButton}
                toHslButton={toHslButton}
                toHexButton={toHexButton}
                repeatRender={values.repeatRender}
                togglePosition={togglePosition}

                fromTopLabel={fromTopLabel}
                fromMiddleLabel={fromMiddleLabel}
                fromBottomLabel={fromBottomLabel}
                fromTopInput={fromTopInput}
                fromMiddleInput={fromMiddleInput}
                fromBottomInput={fromBottomInput}

                toggleFromRgbButton={toggleFromRgbButton}
                toggleFromHslButton={toggleFromHslButton}
                toggleFromHexButton={toggleFromHexButton}
                toggleToRgbButton={toggleToRgbButton}
                toggleToHslButton={toggleToHslButton}
                toggleToHexButton={toggleToHexButton}
                toggleTogglePosition={toggleTogglePosition}
                toggleRepeatRender={values.toggleRepeatRender}
                playerSubmit={playerSubmit}
            />
            <RightConvertPanel
                toTopLabel={toTopLabel}
                toMiddleLabel={toMiddleLabel}
                toBottomLabel={toBottomLabel}
                toTopInput={toTopInput}
                toMiddleInput={toMiddleInput}
                toBottomInput={toBottomInput}
                togglePosition={togglePosition}
                repeatRender={values.repeatRender}

                toggleCreateTriadic={values.toggleCreateTriadic}
                toggleCreateAnalogous={values.toggleCreateAnalogous}
                toggleCreatePastel={values.toggleCreatePastel}
                toggleRepeatRender={values.toggleRepeatRender}
                toggleTogglePosition={toggleTogglePosition}
            />
        </>
    )
}

export default ConvertContainer;
