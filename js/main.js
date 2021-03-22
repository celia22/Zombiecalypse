const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let puntuacion = document.getElementById("score")

function playAgain() {
  document.getElementById('restartButton').onclick = () => {
    document.getElementById("game-over").style.display = "none";
    document.getElementById("intro").style.display = "block";
    document.getElementById("startButton").style.display = "block";

  }
}

function gameOver() {
  console.log("entro en gameover")
  document.getElementById("game-over").style.display = "block";
  document.getElementById("canvas").style.display = "none";
  document.getElementById("score").style.display = "none";
  playAgain();
}



document.addEventListener('DOMContentLoaded', () => {

  function drawGameScreen() {
    document.getElementById('startButton').onclick = () => {
      document.getElementById("game-over").style.display = "none";
      document.getElementById("intro").style.display = "none";
      document.getElementById("startButton").style.display = "none";
      document.getElementById("canvas").style.display = "block";
      document.getElementById("score").style.display = "block";
      startGame();

    };

  };

  function startGame() {
    const zombieGirl = new Player(250, 600, "right", ctx, this.size);
    const zombicalypse = new Game(zombieGirl, ctx);
    zombicalypse.init();
  };



  drawGameScreen();

});

