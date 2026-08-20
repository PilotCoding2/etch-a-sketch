const container = document.getElementById('container');
const button = document.getElementById('sides-selector');
let sides = 16;

const modifySides = (sides) => {
    for(let i = 0; i < sides * sides; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.height = `${800/sides}px`;
        square.style.width = `${800/sides}px`;
        square.dataset.opacity = 0;
        container.appendChild(square);
        square.addEventListener('mouseenter', (e) => {
            let opacity = Number(square.dataset.opacity);
            opacity = Math.min(opacity + 0.1, 1);
            square.dataset.opacity = opacity;
            square.style.backgroundColor = generateColor(opacity);
        });
    }
}

const randomNumberGen = () => {
    return Math.floor(Math.random() * 256);
}

const generateColor = (opacity) => {
    let red = randomNumberGen();
    let green = randomNumberGen();
    let blue = randomNumberGen();
    let rgb = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
    return rgb;
}

button.addEventListener('click', () => {
    if(container.innerHTML !== ""){
        container.innerHTML = "";
        sides = prompt('Select sides');
        if(sides > 0 && sides <= 100){
            modifySides(sides);
        } else {
            alert('Please select a number between 1 and 100');
        }   
    } else {
        sides = prompt('Select sides');
        if(sides > 0 && sides <= 100){
            modifySides(sides);
        } else {
            alert('Please select a number between 1 and 100');
        }   
    }
});
