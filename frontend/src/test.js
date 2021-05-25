function addStyleString (arr) {
    const newArray = []

    //iterate through the array of choosen colors and add the 3-D effect
    for (let i = 0; i < arr.length; i++) {
        newArray.push({ background: `radial-gradient(circle at 100px 100px, rgb(${arr[i]}), #000)` })
    }

    return newArray
}

function generateBattleColors() {
    const arr = []

    //Pick Random RGB color
    const ranColor = randomColor()
    arr.push(ranColor);

    //Find compliment
    const compliment = findComplement(ranColor)

    //find triadic compliments
    const triOne = findTriadics(ranColor).RGBtriOneColor;
    const triTwo = findTriadics(ranColor).RGBtriTwoColor;

    //Find triadic compliments of compliment
    const triCompOne  = findTriadics(compliment).RGBtriOneColor;
    const triCompTwo  = findTriadics(compliment).RGBtriTwoColor;

    arr.push(triCompOne, triOne, compliment, triTwo, triCompTwo)

    return addStyleString(arr)
}

function findComplement (color) {
    let convertedColor = (RGBtoHSL(color))

    let splitColor = convertedColor.split(',');
    let hue = Number(splitColor[0]);
    let satch = splitColor[1];
    let light = splitColor[2];
    let complimentHue = 0;

    if (hue >= 180) {
        complimentHue = hue - 180;
    } else {
        complimentHue = hue + 180;
    }

    let compHSL = (`${complimentHue},${satch},${light}`)
    console.log('complement', compHSL, HSLtoRGB(compHSL))
    return HSLtoRGB(compHSL);
}
// console.log(findTriadics('240, 217, 18'))
console.log('XXXXXXXX', generateBattleColors())

function findTriadics (rgbValue) {
    let convertedColor = RGBtoHSL(rgbValue)
    let splitColor = convertedColor.split(',');
    let hue = Number(splitColor[0]);
    let satch = splitColor[1];
    let light = splitColor[2];
    let triOne = 0;
    let triTwo = 0;
    console.log('triadics', rgbValue, convertedColor, hue, satch, light)
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

    let triOneColor = (`${triOne},${satch},${light}`)
    let triTwoColor = (`${triTwo},${satch},${light}`)
    let RGBtriOneColor = HSLtoRGB(triOneColor);
    let RGBtriTwoColor = HSLtoRGB(triTwoColor);

    return {RGBtriOneColor, RGBtriTwoColor}
}

// console.log('OOOOOOOOO', generateBattleColors());


function HSLtoRGB (hslValue) {
    let split = hslValue.split(',');

    //slice off '%' and convert to numbers
    let h = Number(split[0]);
    let s = Number(split[1].substr(0,split[1].length -1));
    let l = Number(split[2].substr(0,split[2].length -1));

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

    return `${r}, ${g}, ${b}`;
}

// console.log(RGBtoHSL('160, 169, 0'))
function RGBtoHSL (rgbValue) {
    //slice off parens,
    // let sliced = rgbValue.slice(1, rgbValue.length -1);
    let split = rgbValue.split(',');
    let red = Number(split[0]);
    let green = Number(split[1]);
    let blue = Number(split[2]);
    console.log('RGB', red, green, blue)

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

    console.log(`............${h},${s}%,${l}%`)
    return(`${h},${s}%,${l}%`)
}

function generateEasyColors() {
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
    // const newArray = addStyleString(returnArr)
    return returnArr
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

function generateHardColors() {
    const arr = [];

    for (let i = 0; i < 6; i++) {
        arr.push(randomColor());
    }

    // const newArray = addStyleString(arr);
    return arr;
}

// console.log('!!!!!', HSLtoRGB('255, 11%, 33%'))

// console.log(RGBtoHSL('rgb(255, 22, 11)'))
// console.log(generateEasyColors())
// console.log(generateHardColors())
// console.log(RGBtoHSL(generateEasyColors()[1]))
// console.log(RGBtoHSL(generateHardColors()[1]))
