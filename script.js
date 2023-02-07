let columns = 16;
let rows = 16;

//reference to container in HTML
const container = document.querySelector('.container');

for (i = 0; i < columns; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    for(j = 0; j < rows; j++) {
        const row = document.createElement('div');
        row.classList.add('row');
        //row.textContent = i + "-" + j;
        
        column.appendChild(row);
     }
     container.appendChild(column);
    

}