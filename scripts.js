const container = document.getElementById('container');

const divs = [];

for (let i = 1; i <= 16; i++) {
    let div = document.createElement('div');
    div.classList.add('square');
    divs.push(div);
}

for (let i = 0; i < divs.length; i++) {
    container.appendChild(divs[i]);
}