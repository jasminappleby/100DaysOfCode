const canvas = document.getElementById("id");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

let spacePressed = false,
  gameSpeed = 2,
  angle = 0,
  hue = 0,
  frame = 0,
  score = 0;
