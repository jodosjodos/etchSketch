let interactionCount = 0;
const createGridSquare = () => {
  const parentDiv = document.querySelector(".parentDiv");
  const square = document.createElement("div");
  square.classList.add("square");
  parentDiv.appendChild(square);
};

const removeExistingGrid = () => {
  const parentDiv = document.querySelector(".parentDiv");
  parentDiv.innerHTML = "";
};

const randomizeColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

const darkenColor = (color, ineteractions) => {
  const factor = ineteractions * 0.1;
  const red = Math.floor(parseInt(color.slice(4, 7)) * (1 - factor));
  const green = Math.floor(parseInt(color.slice(9, 12)) * (1 - factor));
  const blue = Math.floor(parseInt(color.slice(14, 17)) * (1 - factor));
  return `rgb(${red},${green},${blue})`;
};

const handleSquareClick = (event) => {
  const clickedElement = event.target;

  console.log(interactionCount);
  // Check if the clicked element has the class "square"
  if (clickedElement.classList.contains("square")) {
    const square = clickedElement;
    const color = randomizeColor();
    if (interactionCount < 10) {
      square.style.backgroundColor = darkenColor(color, interactionCount);
    } else {
      square.style.backgroundColor = "#000";
      interactionCount=0
    }
    interactionCount++;
  }
};

const generateGrid = (size) => {
  const totalPixel = 960;
  const nberOfSquare = size * size;
  const squareSize = totalPixel / size;
  for (let i = 1; i <= nberOfSquare; i++) {
    createGridSquare();
  }

  const square = document.querySelectorAll(".square");
  square.forEach((square) => {
    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";
    square.addEventListener("click", (event) => handleSquareClick(event));
  });
};

const handleClick = () => {
  interactionCount = 0;
  const value = parseInt(
    window.prompt("enter nber of grids you want  max is 100")
  );
  if (isNaN(value) || value == 0 || value > 100) {
    window.alert("please enter valid value");
  } else {
    removeExistingGrid();
    generateGrid(value);
  }
};

generateGrid(16);
