function generateGrid(gridSize = 16) {
  const container = document.querySelector("#grid-container");

  for (let r = 0; r < gridSize; r++) {
    // Create row
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    // Create gridSize amount of cells in the row
    for (let c = 0; c < gridSize; c++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);
    }
  }
}

generateGrid()

const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
  cell.addEventListener("mouseenter", changeCellColor)
})

function changeCellColor() {
  if (!this.style.backgroundColor) {
    const bgColor = generateRGBcolor();
    this.style.backgroundColor = bgColor;

    console.log(this.style.backgroundColor)
  } else {
    this.style.border = "5px"
  }

}

function generateRGBcolor() {
  let rgb = [];

  for (let i = 0; i < 3; i++) {
    const num = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    rgb.push(num);
  }

  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
}




