const button = document.querySelector('button');
const container = document.getElementById('container');

button.addEventListener('click', () => {
    let numSquares = parseInt(prompt("How many squares in the Sketch Pad"));
    createSketchPad(numSquares);
})

function createSketchPad(numSquares) {
    for (let i = 1; i <= numSquares * 2; i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
}