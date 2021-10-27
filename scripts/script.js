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
    this.style.filter = "brightness(100%)"
    
    const bgColor = generateRGBcolor();
    this.style.backgroundColor = bgColor;
  } else {
    const filterNum = getNumericValues(this.style.filter);
    if (filterNum > 0) this.style.filter = `brightness(${filterNum - 10}%)`;
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

function getNumericValues(string) {
  const NUMS = "0123456789";
  const lineToStrip = string.split("");

  const numArr = lineToStrip.filter(char => NUMS.includes(char));
  return +numArr.join("");
}