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
            if (!Number(playerInput[i]) && Number(playerInput[i]) !== 0) {
                result.push('From 0 to 255')
                console.log('NAN', playerInput[i])
            }
            if (playerInput[i] < 0 || playerInput[i] > 255) {
                result.push('From 0 to 255')
                console.log('outtaRange', playerInput[i])
            } else  {
                result.push(playerInput[i])
                console.log('bueno', playerInput[i])
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
// console.log(checkInput(['25', '00', '11'], 'rgb'))
// console.log(checkInput(['255', '0', '222'], 'rgb'))
// console.log(checkInput(['ye', '444', '111'], 'rgb'))
// console.log(checkInput(['360', '33', '22'], 'hsl'))
// console.log(checkInput(['1111', '100', '222'], 'hsl'))


function RGBtoHSL (rgbValue) {
    //slice -n- dice
    let sliced = rgbValue.slice(1, rgbValue.length -1);
    let split = sliced.split(',');
    let red = Number(split[0]);
    let green = Number(split[1]);
    let blue = Number(split[2]);

    //Make red, green, blue fractions of 1
    red /= 255;
    green /= 255;
    blue /= 255;

    //Find greatest and smallest channel values
    let cmin = Math.min(red, green, blue);
    let cmax = Math.max(red, green, blue);
    let delta = cmax - cmin;

    //calculate hue
    //no difference
    let h = 0;
    let s = 0;
    let l = 0;
    if (delta === 0) {
        h = 0;
    }
    //Red is max
    else if (cmax === red) {
        h = ((green - blue) / delta) % 6;
    }
    //Green is max
    else if (cmax === green) {
        h = (blue - red) / delta + 2;
    }
    //Blue is max
    else {
        h = (red - green) / delta + 4;
    }
    h = Math.round(h * 60);
    //Make negative hues positive behind 360 degrees
    if (h < 0) {
        h += 360
    }
    //Calculate lightness
    l = (cmax + cmin) / 2;
    //Calculate saturation
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    // Multiply by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return(`(${h}, ${s}%, ${l}%)`)
}

function HEXtoRGB (hex) {
    let r = 0;
    let g = 0;
    let b = 0;

    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
        r = parseInt(hex[1] + hex[2], 16)
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
    }
    return [`${r}`, `${g}`, `${b}`]
}

function RGBtoHEX (rgb) {
    let r = Number(rgb[0])
    let g = Number(rgb[1])
    let b = Number(rgb[2])
    r = r.toString(16)
    g = g.toString(16)
    b = b.toString(16)

    if (r.length ===1)  {r = 0 + r}
    if (g.length ===1)  {g = 0 + g}
    if (b.length ===1)  {b = 0 + b}

    return `${r}${g}${b}`
}

// console.log(HEXtoRGB('#f40016'))
// console.log(RGBtoHSL('(111, 22, 111)'))
console.log(RGBtoHEX(['111', '222', '33']))
// console.log(RGBtoHEX(244, 0, 22))
// console.log(RGBtoHEX(244, 33, 202))


function HSLtoRGB (hslValue) {
    let sliced = hslValue.slice(0, hslValue.length);
    let split = sliced.split(',');
    let arr = split.map(x => Number(x))
    let h = arr[0];
    let s = arr[1];
    let l = arr[2];
    console.log(hslValue, sliced)

    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs((h / 60) % 2 - 1));
    let m = l - c/2;
    let r = 0;
    let g = 0;
    let b = 0;
    // console.log(r, m, b, g, c, x)
    if (0 <= h && h < 60) {
        r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
        r = c; g = 0; b = x;
    }
    // console.log(r, m, b, g)
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return `(${r}, ${g}, ${b})`;
}

console.log(HSLtoRGB(`95, 74, 50`))
// console.log(HSLtoRGB(`1, 77, 10`))
// console.log(HSLtoRGB(`112, 92, 50`))
