const container = document.querySelector('.container');

const slide = document.querySelector('.slide');
const output = document.querySelector('.output .gridSize');
output.textContent = slide.value;

slide.addEventListener('click', function() {
    output.textContent = this.value;
});

const x = slide.value;
const size = x * x;

for(i = 0; i < size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('item');
    container.appendChild(cell);
}

container.setAttribute('style', `grid-template-columns: repeat(${x}, 1fr); grid-template-rows:  repeat(${x}, 1fr)`);

const div = document.querySelectorAll('.item');

let isMouseDown = false;

[...div].forEach((e) => {
    e.addEventListener('mousedown', function() {
        isMouseDown = true;
    });
    e.addEventListener('mouseup', function() {
        isMouseDown = false;
    });
    e.addEventListener('mousemove', function() {
        if(isMouseDown) {
            const color = document.querySelector('.palette');
            this.setAttribute('style', `background: ${color.value}`);
        }
    });
});

function erase() {
    [...div].forEach((e) => {
        if(e.hasAttribute('style')) {
            e.removeAttribute('style');
        }
    });
}

const cleaner = document.querySelector('.cleaner');
cleaner.addEventListener('click', erase);