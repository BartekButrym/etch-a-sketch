const container = document.querySelector('.container');

const slide = document.querySelector('.slide');
const output = document.querySelector('.output .gridSize');

function setUpItems() {
    const items = document.querySelectorAll('.item');
    let isMouseDown = false;
    [...items].forEach((e) => {
        
        e.addEventListener('dragstart', function(item) {
            item.preventDefault();
            return false;
        });
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
}

function erase() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function drawGrid() {
    erase();
    output.textContent = slide.value;

    const x = slide.value;
    const size = x * x;
    
    for(i = 0; i < size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('item');
        container.appendChild(cell);
    }
    
    container.setAttribute('style', `grid-template-columns: repeat(${x}, 1fr); grid-template-rows:  repeat(${x}, 1fr)`);

    setUpItems();
}

slide.addEventListener('input', drawGrid);
drawGrid();

const cleaner = document.querySelector('.cleaner');
cleaner.addEventListener('click', drawGrid);