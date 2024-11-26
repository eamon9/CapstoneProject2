const colors = ["red", "yellow", "green", "blue"];
let randomColorSequence = [];
let currentColorIndex = 0;
let level = 1;
let acceptingInput = false;

function addColorToSequence() {
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  randomColorSequence.push(colors[randomColorIndex]);
  console.log("Sequence:", randomColorSequence);
}

function playAudio(color) {
  new Audio(`./sounds/${color}.mp3`).play();
}

function flashButton(color) {
  $(`.${color}`).addClass("pressed");
  playAudio(color);
  setTimeout(() => $(`.${color}`).removeClass("pressed"), 100);
}

function showSequence() {
  acceptingInput = false;
  $("h1").text(`Level ${level}`);
  currentColorIndex = 0;

  let i = 0;
  const interval = setInterval(() => {
    if (i < randomColorSequence.length) {
      const currentColor = randomColorSequence[i];
      flashButton(currentColor);
      i++;
    } else {
      clearInterval(interval);
      acceptingInput = true;
    }
  }, 500);
}

function checkUserInput(userColor) {
  if (!acceptingInput) return;

  flashButton(userColor);

  const expectedColor = randomColorSequence[currentColorIndex];
  if (userColor === expectedColor) {
    currentColorIndex++;

    if (currentColorIndex === randomColorSequence.length) {
      setTimeout(() => {
        level++;
        playGame();
      }, 1000);
    }
  } else {
    gameOver();
  }
}

function gameOver() {
  $("h1").text("Game Over! Press any key to restart.");
  playAudio("wrong");
  $("body").addClass("game-over");
  resetGame();
  setTimeout(() => $("body").removeClass("game-over"), 200);

  $("body").one("keypress", startGame);
}

function resetGame() {
  randomColorSequence = [];
  currentColorIndex = 0;
  level = 1;
}

function startGame() {
  resetGame();
  playGame();
}

function playGame() {
  addColorToSequence();
  showSequence();
}

$(() => {
  $("body").one("keypress", startGame);

  $(".btn").on("click", function () {
    const userColor = $(this).attr("class").split(" ")[0];
    checkUserInput(userColor);
  });
});
