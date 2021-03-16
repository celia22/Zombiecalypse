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
    const zombieGirl = new Player(250, 540, "right", this.ctx);   
    console.log("new player was called" + zombieGirl) 
    console.log(zombieGirl)
    const brainiac = new Brains(this.x,0, this.size, this.ctx);
    console.log("new brain was called" + brainiac) 
    const zombicalypse = new Game(zombieGirl,brainiac, 0, this.ctx);   
    console.log("new game was called" + zombicalypse)    
    zombicalypse.init()   
    console.log("init was called")
    };


  };


startGame()

});



