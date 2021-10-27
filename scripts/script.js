// RUN FUNCTION ON PAGE LOAD
document.addEventListener('DOMContentLoaded', generateGrid())

const changeGridButton = document.querySelector(".change-grid");
changeGridButton.addEventListener("click", resetGrid);

// FUNCTIONS
function generateGrid(gridSize = 16) {
  const container = document.querySelector("#grid-container");

  container.innerHTML = "";

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

  // Add event listener to cells
  const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
    cell.addEventListener("mouseenter", changeCellColor)
  })
}

function resetGrid() {
  const size = document.querySelector("#grid-size");
  generateGrid(+size.value);
}


function changeCellColor() {
  if (!this.style.backgroundColor) {
    this.style.filter = "brightness(100%)"
    this.style.backgroundColor = generateRGBcolor();
  } else {
    const currentFilterVal = getNumericValues(this.style.filter);
    if (currentFilterVal > 0) this.style.filter = `brightness(${currentFilterVal - 10}%)`;
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