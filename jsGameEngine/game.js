// Canvas set up
const canvas = document.getElementById('gameCanvas');
canvas.width = 800;
canvas.height = 600;
const ctx = canvas.getContext('2d');

// Load assets
const playerImg = new Image();
playerImg.src = './assets/player.png';
const enemyImg = new Image();
enemyImg.src = './assets/enemy.png';
const starImg = new Image();
starImg.src = './assets/star.png';
const bgImg = new Image();
bgImg.src = './assets/background.png';

// Load sounds
const collectSound = new Audio('./assets/collect.mp3');
const gameOverSound = new Audio('./assets/gameover.mp3');
const victorySound = new Audio('./assets/victory.mp3');

// Game variables
let player = { x: 400, y: 500, width: 50, height: 50, speed: 5 };
let enemy = { x: Math.random() * 750, y: 0, width: 50, height: 50, speed: 2 };
let star = { x: Math.random() * 750, y: 0, width: 30, height: 30, speed: 3 };
let score = 0;
let gameOver = false;
let gameWon = false;
let showReplayButton = false;

// Controls
let keys = {};
window.addEventListener('keydown', (e) => (keys[e.key] = true));
window.addEventListener('keyup', (e) => (keys[e.key] = false));

// Collision detection
function isColliding(obj1, obj2) {
  return (
    obj1.x < obj2.x + obj2.width &&
    obj1.x + obj1.width > obj2.x &&
    obj1.y < obj2.y + obj2.height &&
    obj1.y + obj1.height > obj2.y
  );
}

// Game loop
function update() {
  if (keys['ArrowLeft'] && player.x > 0) player.x -= player.speed;
  if (keys['ArrowRight'] && player.x < canvas.width - player.width) player.x += player.speed;
  if (keys['ArrowUp'] && player.y > 0) player.y -= player.speed;
  if (keys['ArrowDown'] && player.y < canvas.height - player.height) player.y += player.speed;

  enemy.y += enemy.speed;
  if (enemy.y > canvas.height) {
    enemy.y = 0;
    enemy.x = Math.random() * 750;
  }

  star.y += star.speed;
  if (star.y > canvas.height) {
    star.y = 0;
    star.x = Math.random() * 750;
  }

  if (isColliding(player, enemy)) {
    if (!gameOver) gameOverSound.play(); // Play game over sound
    gameOver = true;
    showReplayButton = true;
  }

  if (isColliding(player, star)) {
    score++;
    collectSound.play(); // Play star collect sound
    star.y = 0;
    star.x = Math.random() * 750;
  }

  if (score >= 15 && !gameWon) {
    gameWon = true;
    victorySound.play(); // Play victory sound
    showReplayButton = true;
  }
}
//Gameplay set up
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);
  ctx.drawImage(enemyImg, enemy.x, enemy.y, enemy.width, enemy.height);
  ctx.drawImage(starImg, star.x, star.y, star.width, star.height);
  ctx.fillStyle = 'white';
  ctx.font = '20px Arial';
  ctx.fillText(`Score: ${score}`, 10, 20);

  if (gameOver) {
    ctx.fillStyle = 'red';
    ctx.font = '40px Arial';
    ctx.fillText('Game Over!', canvas.width / 2 - 100, canvas.height / 2);
    if (showReplayButton) drawReplayButton();
  }

  if (gameWon) {
    ctx.fillStyle = 'green';
    ctx.font = '40px Arial';
    ctx.fillText('You Win!', canvas.width / 2 - 100, canvas.height / 2);
    if (showReplayButton) drawReplayButton();
  }
}

function drawReplayButton() {
  ctx.fillStyle = 'white';
  ctx.fillRect(canvas.width / 2 - 75, canvas.height / 2 + 40, 150, 50);
  ctx.fillStyle = 'black';
  ctx.font = '20px Arial';
  ctx.fillText('Replay', canvas.width / 2 - 35, canvas.height / 2 + 75);

  canvas.addEventListener('click', handleReplayClick);
}

function handleReplayClick(event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Check if click is within replay button bounds
  if (
    x > canvas.width / 2 - 75 &&
    x < canvas.width / 2 + 75 &&
    y > canvas.height / 2 + 40 &&
    y < canvas.height / 2 + 90
  ) {
    resetGame();
  }
}

function resetGame() {
  gameOver = false;
  gameWon = false;
  showReplayButton = false;
  score = 0;
  player = { x: 400, y: 500, width: 50, height: 50, speed: 5 };
  enemy = { x: Math.random() * 750, y: 0, width: 50, height: 50, speed: 2 };
  star = { x: Math.random() * 750, y: 0, width: 30, height: 30, speed: 3 };
  canvas.removeEventListener('click', handleReplayClick);
  gameLoop();
}

function gameLoop() {
  if (!gameOver && !gameWon) {
    update();
    draw();
    requestAnimationFrame(gameLoop);
  } else {
    draw();
  }
}

gameLoop();