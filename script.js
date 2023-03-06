canvasSquares(16);
const color = "black";


let mouseIsDown = false;

document.body.addEventListener('mousedown', () => {
    mouseIsDown = true;
});

document.body.addEventListener('mouseup', () => {
    mouseIsDown = false;
});


// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://stackoverflow.com/questions/47641309/combine-mouse-events-in-javascript
const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mousemove', () => {
        if (mouseIsDown == true) {
            square.setAttribute('style', 'background-color: ' + color);
        }
    });
})


function canvasSquares(num) {
    let containerCanvas = document.getElementById('canvas');
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
}


