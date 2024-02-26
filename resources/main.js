const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const darkSquareColor = "#305E7E";
const lightSquareColor = "#FAF6EC";

const boardState = [
  ["dR", "dN", "dB", "dK", "dQ", "dB", "dN", "dR"],
  ["dP", "dP", "dP", "dP", "dP", "dP", "dP", "dP"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["lP", "lP", "lP", "lP", "lP", "lP", "lP", "lP"],
  ["lR", "lN", "lB", "lK", "lQ", "lB", "lN", "lR"],
];

// create board
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (i % 2 == 0) {
      ctx.fillStyle = j % 2 == 0 ? darkSquareColor : lightSquareColor;
      ctx.fillRect(i*135, j*135, 135, 135);
    } else {
      ctx.fillStyle = j % 2 != 0 ? darkSquareColor : lightSquareColor;
      ctx.fillRect(i*135, j*135, 135, 135);
    }
  }
}