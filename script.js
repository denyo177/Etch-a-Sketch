let columns = 16;
let rows = 16;

//reference to container in HTML
const container = document.querySelector('.container');

for (i = 0; i < columns; i++) {
    const column = document.createElement('div');
    column.classList.add('column', `No${i+1}`);
    for(j = 0; j < rows; j++) {
        const row = document.createElement('div');
        row.classList.add('row', `No${j+1}`);
        //row.textContent = i + "-" + j;
        //only set left border except for last column to prevent double borders
        if (i === 15) {
            row.style.borderLeft = "1px solid black";
            row.style.borderRight = "1px solid black";
        } else {
            row.style.borderLeft = '1px solid black';
        }
        row.style.borderTop = '1px solid black';
        //Set Bottom Border only for last items in each column
        if (j === 15) {
            row.style.borderBottom = '1px solid black';
        }
        column.appendChild(row);
     }
     container.appendChild(column);
}
//Every square that is hovered over, changes color to red
const square = document.querySelectorAll('.row');
square.forEach(sqr => sqr.addEventListener('mouseover', (e) => {
    //Für jedes div, ändere Background-Color
    sqr.classList.add('hover');
}));  