
const container = document.querySelector('.container');

function buildGrid() {

    removeGrid();
    const gridSize = parseInt(prompt("How many squares should the grid have? (max. 100, min. 2)", "16"), 10);
    
    if (gridSize <= 100 && gridSize > 1) {
    
        for (i = 0; i < gridSize; i++) {
            const column = document.createElement('div');
            column.classList.add('column'); 
            for (j = 0; j < gridSize; j++) {
                const row = document.createElement('div');
                row.classList.add('row'); 
                //max size of sketchpad 640px height and width
                row.style.width = `${(640/gridSize)}` + `px`; 
                row.style.height = `${(640/gridSize)}` + `px`;
                
                column.appendChild(row);
            }
            container.appendChild(column);
        }
    } else {
        alert("No valid size");
    }
    //Every square that is hovered over, changes color to red
    const square = document.querySelectorAll('.row');
    square.forEach(sqr => sqr.addEventListener('mouseover', (e) => {
        
        if (!sqr.style.backgroundColor) {
            sqr.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        } else {
            // get alpha value out of color and increase by 10%
            const a = parseFloat(sqr.style.backgroundColor.slice(14, 17)) + 0.1;
            sqr.style.backgroundColor = `rgba(0, 0, 0, ${a})`;
        }
    }));  
}

function removeGrid() {
    const element = document.querySelector('.container');
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
