const button = document.querySelector('button');
const container = document.getElementById('container');

function createSketchPad(numSquares) {
    for (let i = 1; i <= numSquares; i++) {
        let column = document.createElement('div');
        column.classList.add('square');
        column.classList.add('column');
        for (let j = 1; j <= numSquares; j++) {
            let row = document.createElement('div');
            row.classList.add('square');
            column.appendChild(row);
        }
        container.appendChild(column);
    }
}

createSketchPad(16);

button.addEventListener('click', () => {
    let numSquares = parseInt(prompt("How many squares in the Sketch Pad"));
    createSketchPad(numSquares);
})

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = '#eeeeee';
    })
})