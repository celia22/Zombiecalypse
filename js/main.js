const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let puntuacion = document.getElementById("score")




document.addEventListener('DOMContentLoaded', () => {

  function drawGameScreen() {
    document.getElementById('startButton').onclick = () => {
      document.getElementById("game-over").style.display = "none";
      document.getElementById("intro").style.display = "none";
      document.getElementById("startButton").style.display = "none";
      document.getElementById("canvas").style.display = "block";
      document.getElementById("score").style.display = "block";

    };
  };

  function startGame() {
    const zombieGirl = new Player(250, 600, "right", ctx, this.size);
    const zombicalypse = new Game(zombieGirl, ctx);
    zombicalypse.init()
  };


  drawGameScreen();
  startGame();

});



