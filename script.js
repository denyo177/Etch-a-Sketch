
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
                
                // //only set left border except for last column to prevent double borders
                // if (i === gridSize-1) {
                //     row.style.borderLeft = "1px solid black";
                //     row.style.borderRight = "1px solid black";
                // } else {
                //     row.style.borderLeft = '1px solid black';
                // }
                // row.style.borderTop = '1px solid black';
                // //Set Bottom Border only for last items in each column
                // if (j === gridSize-1) {
                //     row.style.borderBottom = '1px solid black';
                // }
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
        //Für jedes div, ändere Background-Color
        sqr.classList.add('hover');
    }));  
}

function removeGrid() {
    
    const element = document.querySelector('.container');
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}



