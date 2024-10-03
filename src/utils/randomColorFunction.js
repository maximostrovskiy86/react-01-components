import colors from  '../data/colors.json'

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

 export const randomColor = () => {
    const arrayColors = colors.map(color => color.rgb);
    return `rgb(${arrayColors[randomInteger(0, arrayColors.length - 1)]})`;
}
