function createSketchPad(numSquares) {
    const container = document.getElementById('container');
    container.innerHTML = '';
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
            let color = document.querySelector('input').value;
            square.style.backgroundColor = color;
        })
    })
}

const range = document.querySelector('.range');
let value = 16;
createSketchPad(value);
range.addEventListener('mousemove', () => {{
    let display = document.querySelector('.range-display')
    let value = range.value;
    display.innerText = `${value} X ${value}`;
}})

range.addEventListener('change', () => {
    let value = range.value;
    createSketchPad(value);
})

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    createSketchPad(value);
})