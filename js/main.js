const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let puntuacion = document.getElementById("score")

function playAgain() {
  document.getElementById('restartButton').onclick = () => {
    document.getElementById("game-over").style.display = "none";
    document.getElementById("intro").style.display = "flex";
    document.getElementById("startButton").style.display = "flex";

  }
}

function gameOver() {
  console.log("entro en gameover")
  document.getElementById("game-over").style.display = "flex";
  document.getElementById("canvas").style.display = "none";
  document.getElementById("score").style.display = "none";
  document.getElementById("level").style.display = "none";
  document.getElementById("game").style.display = "none";
  playAgain();
}



document.addEventListener('DOMContentLoaded', () => {

  function drawGameScreen() {
    document.getElementById('startButton').onclick = () => {
      document.getElementById("game-over").style.display = "none";
      document.getElementById("intro").style.display = "none";
      document.getElementById("startButton").style.display = "none";
      document.getElementById("game").style.display = "flex";
      document.getElementById("canvas").style.display = "flex";
      document.getElementById("score").style.display = "flex";
      document.getElementById("level").style.display = "flex";
      startGame();

    };

  };

  function startGame() {
    const zombieGirl = new Player(650, 615, "right", ctx, this.size);
    const zombicalypse = new Game(zombieGirl, ctx);
    zombicalypse.init();
  };



  drawGameScreen();

});

