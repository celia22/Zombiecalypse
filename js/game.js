class Game {
  constructor(player, brains,score){    
    this.player = player;    
    this.brains = brains;    
    this.score = score;
    this.generatedBrain = [];
    
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
          this.player.fall();
          break;

         }
      });

  }

  // BRAINS AND ENEMIES
  
  generateBrains(){
   
    for (let i = 0; i < 30; i++){
      this.generatedBrain.push(new Brains);
      
    }
      
}

drawBrains(){
  const brainImg = new Image();
  brainImg.src = "./images/brain.png";
  ctx.drawImage(brainImg, this.brains.x, this.brains.y, 100, 100);

  this.generatedBrain.forEach(item => {
    ctx.drawImage(brainImg, item.x, item.y, 100, 100);
    
  });
  
}



  moveBrains() {
    this.brains.y =+ 60;
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
    this.moveBrains();
    setInterval(this.generateBrains, 1500)
    window.requestAnimationFrame(this.update.bind(this));
   
  }  

  
  init() {
    this.setControlsToKeys ();    
    this.generateBrains();
    window.requestAnimationFrame(this.update.bind(this));
  }
  
  

};

