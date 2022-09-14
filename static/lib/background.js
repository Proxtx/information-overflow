let canvas = document.getElementById("background-canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");

let color = "#00AA11";

const drawCross = (x, y, width, height, color, stroke = 0.3) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width / 2, height / 2);
  /*ctx.fillRect(x + width / 2, y, stroke, height);*/
};

const drawSquare = (posX, posY, size, crosses, color) => {
  let crossSize = size / crosses;
  for (let x = 0; x < crosses; x++) {
    for (let y = 0; y < crosses; y++) {
      drawCross(
        posX + x * crossSize,
        posY + y * crossSize,
        crossSize - crosses / 5,
        crossSize - crosses / 5,
        color
      );
    }
  }
};

const drawMatrix = (posX, posY, size, squares) => {
  for (let x = 0; x < squares; x++) {
    for (let y = 0; y < squares; y++) {
      let color = colorGradient(
        { r: 22, g: 117, b: 0 },
        { r: 0, g: 219, b: 26 },
        Math.random()
      );
      drawSquare(
        (size / squares) * x + posX,
        (size / squares) * y + posY,
        size / squares,
        7,
        `rgb(${color.r},${color.g},${color.b})`
      );
    }
  }
};

const drawBackground = (posX, posY, width, height, matrixSize) => {
  for (let x = 0; x < width / matrixSize; x++) {
    for (let y = 0; y < height / matrixSize; y++) {
      drawMatrix(
        posX + x * matrixSize,
        posY + y * matrixSize,
        matrixSize - matrixSize / 20,
        3
      );
    }
  }
};

const lerp = (a, b, u) => {
  return (1 - u) * a + u * b;
};

const colorGradient = (start, end, percent) => {
  return {
    r: Math.round(lerp(start.r, end.r, percent)),
    g: Math.round(lerp(start.g, end.g, percent)),
    b: Math.round(lerp(start.b, end.b, percent)),
  };
};

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const loop = () => {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  drawBackground(0, 0, window.innerWidth, window.innerHeight, 100);
  setTimeout(loop, 100);
};

loop();

window.addEventListener(
  "resize",
  () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  },
  false
);
