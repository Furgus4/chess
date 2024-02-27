const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1080;
canvas.height = 1080;

const darkSquareColor = "#305E7E";
const lightSquareColor = "#FAF6EC";
const squareLength = canvas.width / 8;

// create board
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (i % 2 == 0) {
      ctx.fillStyle = j % 2 == 0 ? darkSquareColor : lightSquareColor;
      ctx.fillRect(i*squareLength, j*squareLength, squareLength, squareLength);
    } else {
      ctx.fillStyle = j % 2 != 0 ? darkSquareColor : lightSquareColor;
      ctx.fillRect(i*squareLength, j*squareLength, squareLength, squareLength);
    }
  }
}