class Game {
  constructor(player, brains,score){    
    this.player = player;    
    this.brains = brains;    
    this.score = score;
    
    //this.gameover;
    
  }

  // PLAYER 

  drawPlayer(){    
    const img = new Image();
    img.src = "./images/zombies/Attack (2).png"; 
    ctx.drawImage(img, this.player.x, this.player.y, 150, 150);    
  }

  setControlsToKeys (){
    console.log("movePlayer is called")
    document.addEventListener('keydown', event => {
        switch (event.code) {   
          case "ArrowLeft":     
            this.player.moveLeft();
            console.log('left');
            break;
          case "ArrowRight":
            this.player.moveRight();
            console.log('right');
            break;
          case "ArrowUp":
            this.player.moveUp();
            console.log("up");
            break;

        }
      });
    
      document.addEventListener('keyup', event => {
        switch (event.code){
        case "ArrowUp":
          this.player.y += 40;
          break;

         }
      });

  }

  // BRAINS AND ENEMIES

  drawBrains(){
    const brainImg = new Image();
    brainImg.src = "./images/brain.png";
    ctx.drawImage(brainImg, this.brains.x, this.brains.y, 100, 100);
  }

  generateBrains(){
    let generatedBrain = []
    for (let i = 0; i < 30; i++){
      generatedBrain.push(this.brainiac * 30)
    }
  }



    // collision(){
    // }
      
      
    // updateScore(){
    // }
      
    // drawScore(){
    // }


  cleanCanvas (){
      ctx.clearRect(0,0,1450,700);
  }

  update() {      
    this.cleanCanvas();
    this.drawPlayer();
    this.drawBrains();
    this.generateBrains();
    window.requestAnimationFrame(this.update.bind(this));
   
  }  

  init() {
    this.setControlsToKeys ();
    window.requestAnimationFrame(this.update.bind(this));
  }
  
};

