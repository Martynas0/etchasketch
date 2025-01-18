const container = document.querySelector(".main-container");


createGrid(50);

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = createRow();
        fillRow(row, size);     
    }
}

function createRow() {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    return row;
}

function fillRow (row, size) {
    for (let i = 0; i < size; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        row.appendChild(block);
    }
}



