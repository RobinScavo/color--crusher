// function randomPastelColor() {
//     //pick a "red" from 0 to 255
//     const r = Math.floor(Math.random() * 76) + 180;
//     //pick a "green" from 0 to 255
//     const g = Math.floor(Math.random() * 76) + 180;
//     //pick a "blue" from 0 to 255
//     const b = Math.floor(Math.random() * 76) + 180;

//     if ((r + g + b) > 700) randomPastelColor();
//     console.log('*******', r, g, b, (r + g + b))
//     // return RGBtoHSL(`(${r}, ${g}, ${b})`);
// }

const checkInput = (playerInput, mode) => {
    const result = [];
    if (mode === 'rgb') {
        for (let i = 0; i < 3; i++) {
            if (!Number(playerInput[i])) {
                result.push('From 0 to 255')
            }
            if (playerInput[i] < 0 || playerInput[i] > 255) {
                result.push('From 0 to 255')
            } else  {
                result.push(playerInput[i])
            }
        }
    }
    if (mode === 'hsl') {
        if (playerInput[0] < 0 || playerInput[0] > 360) {
            result.push('From 0 to 360')
        } else {
            result.push(playerInput[0])
        }
        for (let i = 1; i < 3; i++) {
            if (playerInput[i] < 0 || playerInput[i] > 100) {
                result.push('From 0 to 100')
            } else  {
                result.push(playerInput[i])
            }
        }
    }
    if (mode === 'hex') {
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

// console.log(checkInput(['13', 'F1', 'BB'], 'hex'))
// console.log(checkInput(['3', '09', 'k1'], 'hex'))
// console.log(checkInput(['255', '0', '222'], 'rgb'))
// console.log(checkInput(['ye', '444', '111'], 'rgb'))
// console.log(checkInput(['360', '33', '22'], 'hsl'))
// console.log(checkInput(['1111', '100', '222'], 'hsl'))
