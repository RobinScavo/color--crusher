function randomPastelColor() {
    //pick a "red" from 0 to 255
    const r = Math.floor(Math.random() * 76) + 180;
    //pick a "green" from 0 to 255
    const g = Math.floor(Math.random() * 76) + 180;
    //pick a "blue" from 0 to 255
    const b = Math.floor(Math.random() * 76) + 180;

    if ((r + g + b) > 700) randomPastelColor();
    console.log('*******', r, g, b, (r + g + b))
    // return RGBtoHSL(`(${r}, ${g}, ${b})`);
}

randomPastelColor()
randomPastelColor()
randomPastelColor()
