
export function generateEasyColors() {
    //Array of all possible 'easy ' colors (all values either 0 or 255)
    let arr = [
        "(0, 0, 0)",
        "(0, 0, 255)",
        "(255, 0, 255)",
        "(255, 255, 255)",
        "(0, 255, 255)",
        "(255, 0, 0)",
        "(0, 255, 0)",
        "(255, 255, 0)"
    ];

    let returnArr = []
    //fill returnArr array with random easy colors
    while (returnArr.length !== 6) {
        let randomNum = Math.floor(Math.random() *8);
        let randomColor = arr[randomNum]
        if(!returnArr.includes(randomColor)){
            returnArr.push(randomColor)
        }
    }
    //Add 3D effect
    const newArray = addStyleString(returnArr)
    return newArray
}

function addStyleString (arr) {
    const newArray = []

    //iterate through the array of choosen colors and add the 3-D effect
    for (let i = 0; i < arr.length; i++) {
        newArray.push({ background: `radial-gradient(circle at 100px 100px, rgb${arr[i]}, #000)` })
    }

    return newArray
}

// export function generateHardColors() {
//     const arr = [];

//     for (let i = 0; i < 6; i++) {
//         arr.push(randomColor());
//     }
//     console.log('generate hard colors', arr)

//     const newArray = addStyleString(arr);
//     return newArray;
// }

export function generateGhostColors() {
    const arr = [];

    for (let i = 0; i < 6; i++) {
        let temp = randomColor();
        let sliced = temp.slice(1)
        arr.push(sliced);
    }

    const newArray = addStyleString(arr);
    const blurredArray = addBlurClass(newArray)
    return blurredArray;
}

function addBlurClass(arr) {
    const blurredArray = [];

    for (let i = 0; i < arr.length; i++) {
        let object = arr[i];
        object.class = 'blurred';
        blurredArray.push(object)
    }
    return blurredArray;
}

function randomColor() {
    //pick a "red" from 0 to 255
    const r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 to 255
    const g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 to 255
    const b = Math.floor(Math.random() * 256);
    // return RGBtoHSL(`(${r}, ${g}, ${b})`);
    return `${r}, ${g}, ${b}`;
}

//find high numbers
function randomPastelColor() {
    //pick a "red" from 76 to 180
    const r = Math.floor(Math.random() * 76) + 180;
    //pick a "green" from 76 to 180
    const g = Math.floor(Math.random() * 76) + 180;
    //pick a "blue" from 76 to 180
    const b = Math.floor(Math.random() * 76) + 180;

    //make sure its not too white
    if ((r+g+b) > 700 || (r+g+b) < 600  || ((Math.abs(r - g)) + (Math.abs(g - b))) < 40) {
        return randomPastelColor()
    }
    // console.log(r, g, b)
    return RGBtoHSL(`(${r}, ${g}, ${b})`);
}

// function convertCustomColor() {
//     return
// }

export function generateBattleColors() {
    const arr = []
    //Pick Random RGB color
    const ranColor = randomColor()
    arr.push(ranColor);
    //Find compliment
    const compliment = findComplement(ranColor)
    //find triadic compliments
    const triOne = findTriadics(ranColor).triOneColor;
    const triTwo = findTriadics(ranColor).triTwoColor;
    //Find triadic compliments of compliments
    const analogousOne  = findTriadics(compliment).triOneColor;
    const analogousTwo  = findTriadics(compliment).triTwoColor;
    arr.push(analogousOne, triOne, compliment, triTwo, analogousTwo)
    console.log('battleArray', arr)
    return addStyleString(arr)
}

export function generateZenColors() {
    const arr = []
    //Pick Random RGB color
    const ranColor = randomColor()
    arr.push(ranColor);
    //Find compliment
    const compliment = findComplement(ranColor)
    //find analogous compliments
    const triOne = findAnalogous(ranColor).analogousOneColor;
    const triTwo = findAnalogous(ranColor).analogousTwoColor;
    //Find analogous compliments of compliment
    const analogousOne  = findAnalogous(compliment).analogousOneColor;
    const analogousTwo  = findAnalogous(compliment).analogousTwoColor;
    arr.push(analogousOne, triOne, compliment, triTwo, analogousTwo)

    return addStyleString(arr)
}

export function generatePastelColors() {
    const arr = []
    //Pick Random RGB color
    const ranColor = randomPastelColor()
    // console.log('TTTTTTT', ranColor)
    arr.push(ranColor);
    //Find compliment
    const compliment = findComplement(ranColor)
    //find analogous compliments
    const triOne = findAnalogous(ranColor).analogousOneColor;
    const triTwo = findAnalogous(ranColor).analogousTwoColor;
    //Find analogous compliments of compliment
    const analogousOne  = findAnalogous(compliment).analogousOneColor;
    const analogousTwo  = findAnalogous(compliment).analogousTwoColor;
    arr.push(analogousOne, triOne, compliment, triTwo, analogousTwo)
    // console.log('JJJJJJJJ', arr)
    return addStyleString(arr)
}

export function generateCustomColors(playerColor) {
    const arr = []
    //Pick Random RGB color
    // const ranColor = randomPastelColor()
    // let convertedColor = RGBtoHSL(playerColor);
    let tempArr = playerColor.split(',')
    let first = tempArr[0]
    let second = `${tempArr[1]}%`
    let third = `${tempArr[2]}%`
    let tempPlayer = `(${first}, ${second}, ${third})`
    arr.push(tempPlayer);
    //Find compliment
    const compliment = findComplement(tempPlayer)
    //find analogous compliments
    const triOne = findAnalogous(tempPlayer).analogousOneColor;
    const triTwo = findAnalogous(tempPlayer).analogousTwoColor;
    //Find analogous compliments of compliment
    const analogousOne  = findAnalogous(compliment).analogousOneColor;
    const analogousTwo  = findAnalogous(compliment).analogousTwoColor;
    arr.push(analogousOne, triOne, compliment, triTwo, analogousTwo)
    // console.log('UUUUUUUU', arr, playerColor)

    return addStyleString(arr)
}


function findComplement (color) {
    let convertedColor = (RGBtoHSL(color))
    let splitColor = convertedColor.split(',');
    console.log('.......', splitColor)
    let hue = Number(splitColor[0].slice(1));
    let satch = splitColor[1].slice(1);
    let light = splitColor[2].slice(0, splitColor[2].length -1);
    // console.log(color, convertedColor, hue, satch, light)
    let complimentHue = 0;

    if (hue >= 180) {
        complimentHue = hue - 180;
    } else {
        complimentHue = hue + 180;
    }

    let compHSL = (`${complimentHue}, ${satch}, ${light}`)
    // console.log('complement', compHSL)
    return HSLtoRGB(compHSL);
}

function findTriadics (hslColor) {
    let valueArray= hslColor.split(',');
    let hue = Number(valueArray[0].slice(1));
    let satch = valueArray[1].slice(1, valueArray[1].length -1);
    let light = valueArray[2].slice(1, valueArray[2].length -2);;
    let triOne = 0;
    let triTwo = 0;

    if (hue < 120) {
        triOne = hue + 120;
        triTwo = hue + 240;
    } else if (hue >= 120 && hue < 240) {
        triOne = hue + 120;
        triTwo = hue - 120;
    } else {
        triOne = hue - 240;
        triTwo = hue - 120;
    }

    let triOneColor = (`(${triOne}, ${satch}%, ${light}%)`)
    let triTwoColor = (`(${triTwo}, ${satch}%, ${light}%)`)
    let RGBtriOneColor = HSLtoRGB(triOneColor);
    let RGBtriTwoColor = HSLtoRGB(triTwoColor);

    return {RGBtriOneColor, RGBtriTwoColor}
}

function findAnalogous (hslColor) {
    let valueArray= hslColor.split(',');
    let hue = Number(valueArray[0].slice(1));
    let satch = valueArray[1].slice(1, valueArray[1].length -1);
    let light = valueArray[2].slice(1, valueArray[2].length -2);;
    let triOne = 0;
    let triTwo = 0;

    if (hue < 150) {
        triOne = hue + 150;
        triTwo = hue + 210;
    } else if (hue >= 150 && hue < 240) {
        triOne = hue + 150;
        triTwo = hue - 150;
    } else {
        triOne = hue - 210;
        triTwo = hue - 150;
    }

    let analogousOneColor = (`(${triOne}, ${satch}%, ${light}%)`)
    let analogousTwoColor = (`(${triTwo}, ${satch}%, ${light}%)`)
    let RGBanalogousOne = HSLtoRGB(analogousOneColor)
    let RGBanalogousTwo = HSLtoRGB(analogousTwoColor)

    return {RGBanalogousOne, RGBanalogousTwo}
}

export function RGBtoHSL (rgbValue) {
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

export function RGBtoHSLvalue (rgbValue) {
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

    return [`${h}`, `${s}`, `${l}`]
}

export function HSLtoRGB (hslValue) {
    // console.log('input', hslValue)
    let split = hslValue.split(',');
    let arr = split.map(x => Number(x))
    // console.log('split', split, 'arr', arr)
    let h = arr[0];
    let s = arr[1];
    let l = arr[2];
    // console.log(arr, hslValue, 'hslTOrgb', h, s, l)

    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs((h / 60) % 2 - 1));
    let m = l - c/2;
    let r = 0;
    let g = 0;
    let b = 0;

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

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return `(${r}, ${g}, ${b})`;
}

export function HEXtoRGB (hex) {
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

export function RGBtoHEX (rgb) {
    let r = Number(rgb[0])
    let g = Number(rgb[1])
    let b = Number(rgb[2])
    r = r.toString(16)
    g = g.toString(16)
    b = b.toString(16)

    if (r.length ===1)  {r = 0 + r}
    if (g.length ===1)  {g = 0 + g}
    if (b.length ===1)  {b = 0 + b}

    return [`${r}`, `${g}`, `${b}`]
}


//Console greeting
const style = "font-size: 14px;" +
  "background: #67b26f;" +
  "background: -webkit-linear-gradient(to right,  rgb(87, 189, 227), rgba(42, 81, 109));" +
  "background: linear-gradient(to right,  rgb(87, 189, 227), rgba(42, 81, 109));" +
  "color: white;" +
  "text-align: center;" +
  "padding: 10px 15px;" +
  "width: 100%;" +
  "border-radius: 20px;";

const text = "%cLet's talk!🙂 sirscavo@gmail.com";

console.log(text, style);

// export const zenObject = {
//     0: "Trust is good... control is better.",
//     1: "I've never known a thing in my life.",
//     2: "Nothing is something worth doing.",
//     3: "Sleep is the best meditation.",
//     4: "Everything has a crack in it, that's how the light gets in.",
//     5: "These mountains that you carry, you were only meant to climb.",
//     6: "Let go or be dragged.",
//     7: "Transcend the bullshit.",
//     8: "And when they played they really played. And when they worked they really worked.",
//     9: "Relax. Nothing is under control.",
//     10: "If you chase two rabbits, you catch none.",
//     11: "Don't be afraid to just sit and watch.",
//     12: "Become comfortable with not knowing.",
//     13: "Life begins where fear ends.",
//     14: "Don't curse the darkness, light a candle.",
//     15: "This will never come again.",
//     16: "Nothing is what you want.",
//     17: "I have lived with several Zen masters - all of them cats.",
//     18: "Matters of great concern should be treated lightly. Matters of small concerns should be treated seriously.",
//     19: "Obstacles don't block the path, they are the path.",
//     20: "If it is to be, it must be me.",
//     21: "Don't enable the scumbags.",
//     22: "The first draft of everything is crap.",
//     23: "When action grows unprofitable, gather information. When information grows unprofitable, sleep."
// }
