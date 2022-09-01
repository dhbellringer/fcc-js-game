let playerState = "run";
const dropdown = document.getElementById("animations");
dropdown.addEventListener("change", (e) => {
  playerState = e.target.value;
});

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "assets/shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;
let gameFrame = 0;
const staggerFrames = 3;

const spriteAnimations = [];

const animationStates = [
  { name: "idle", frames: 7 },
  { name: "jump", frames: 7 },
  { name: "fall", frames: 7 },
  { name: "run", frames: 9 },
  { name: "dizzy", frames: 11 },
  { name: "sit", frames: 5 },
  { name: "roll", frames: 7 },
  { name: "bite", frames: 7 },
  { name: "ko", frames: 12 },
  { name: "getHit", frames: 4 },
];

// Generate array of locations for each animation
animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let postitionX = j * spriteWidth;
    let postitionY = index * spriteHeight;
    frames.loc.push({ x: postitionX, y: postitionY });
  }
  spriteAnimations[state.name] = frames;
});

function animate() {
  // Clear out any previous frame
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // This is frame position
  let postition =
    Math.floor(gameFrame / staggerFrames) %
    spriteAnimations[playerState].loc.length;
  // Get the actual X & Y co-ord of the frame being drawn
  let frameX = spriteAnimations[playerState].loc[postition].x;
  let frameY = spriteAnimations[playerState].loc[postition].y;

  ctx.drawImage(
    playerImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );
  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
