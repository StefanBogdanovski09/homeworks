function generateTable() {
    const numRows = document.getElementById("rows").value;
    const numCols = document.getElementById("cols").value;
    const table = document.getElementById("table");
    table.innerHTML = "";

    for (let r = 1; r <= numRows; r++) {
        const row = table.insertRow();
        for (let c = 1; c <= numCols; c++) {
            const cell = row.insertCell();
        }
    }
}