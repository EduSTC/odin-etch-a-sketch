// createSquares(16);
const color = "black";
let lastColor = color;


let mouseIsDown = false;

document.body.addEventListener('mousedown', () => {
    mouseIsDown = true;
});


document.body.addEventListener('mouseup', () => {
    mouseIsDown = false;
});


let slider = document.getElementById('slider');
let value = document.getElementById('grid-value');
value.textContent = slider.value + " x " + slider.value;
createSquares(slider.value);

slider.oninput = function() {
    value.textContent = this.value + " x " + this.value;
    createSquares(this.value);
}







function createSquares(num) {
    let containerCanvas = document.getElementById('canvas');
    resetSquares(containerCanvas);
    for (let i = 0; i < num; i++) {
        const column = document.createElement('div');
        column.setAttribute('class', 'column');
        containerCanvas.appendChild(column);
        for (let j = 0; j < num; j++) {
            const row = document.createElement('div');
            row.setAttribute('class', 'square');
            column.appendChild(row);
        }
    }
    enablePainting();
}

// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://stackoverflow.com/questions/47641309/combine-mouse-events-in-javascript
function enablePainting() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mousemove', () => {
            if (mouseIsDown == true) {
                square.setAttribute('style', 'background-color: ' + color);
            }
        });
    })
}

function resetSquares(squareArea) {
    while (squareArea.firstChild) {
        squareArea.removeChild(squareArea.firstChild);
    }
}



