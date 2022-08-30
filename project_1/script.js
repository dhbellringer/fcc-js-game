const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "assets/shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 3;
let frameCount = [7, 7, 7, 9, 11, 5, 7, 7, 12, 4];

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(
    playerImage,
    spriteWidth * frameX,
    spriteHeight * frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );
  if (gameFrame % staggerFrames == 0) {
    frameX = (frameX + 1) % frameCount[frameY];
  }
  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
