const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


document.getElementById("gameover").style.display = "none"; 



document.addEventListener('DOMContentLoaded', () => {

  function drawGameScreen() {
    document.getElementById("game").style.display = "block";
    
   };

  function startGame(){
    document.getElementById('startButton').onclick = () => {
      document.getElementById("intro").style.display = "none";    
     document.getElementById("startButton").style.display = "none";  
     
    drawGameScreen();
    const zombieGirl = new Player;
    const zombicalypse = new Game(zombieGirl, ctx);    
    zombicalypse.init()   
    };


  };


startGame()

});



