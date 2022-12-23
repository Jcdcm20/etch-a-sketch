function createSketchPad(numSquares) {
    const container = document.getElementById('container');
    for (let i = 1; i <= numSquares; i++) {
        let column = document.createElement('div');
        column.classList.add('column');
        for (let j = 1; j <= numSquares; j++) {
            let row = document.createElement('div');
            row.classList.add('square');
            column.appendChild(row);
        }
        container.appendChild(column);
    }

    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = '#000000';
        })
    })
}


createSketchPad(16);

const button = document.querySelector('button');
button.addEventListener('click', () => {
    
    let numSquares = parseInt(prompt("How many squares in the Sketch Pad"));
    createSketchPad(numSquares);
})
