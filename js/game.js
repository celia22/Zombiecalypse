let generatedBrain = [];


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
          this.player.fall();
          break;

         }
      });

  }

  // BRAINS AND ENEMIES
  
  generateBrains(){  
  let temp = new Brains()      
   generatedBrain.push(temp);      
   console.log(generatedBrain)
 }


drawBrains(){
  // const brainImg = new Image();
  // brainImg.src = "./images/brain.png";
  // ctx.drawImage(brainImg, this.brains.x, this.brains.y, 100, 100);

  generatedBrain.forEach(item => {
    this.brains.draw(item);
  });
    
}


moveBrains() {
  this.brains.y += 5;
}

    // collision(){
    // }
      
      
    // updateScore(){
    // }
      
    // drawScore(){
    // }


  cleanCanvas (){
      ctx.clearRect(0,0,1450,750);
  }

  update() {      
    this.cleanCanvas();
    this.drawPlayer();
   // this.drawBrains();    
    this.moveBrains();    
    window.requestAnimationFrame(this.update.bind(this));
   
  }  

  
  init() {
    this.setControlsToKeys ();    
    setInterval(this.generateBrains, 3000)
    this.drawBrains();
    window.requestAnimationFrame(this.update.bind(this));
  }  
  

};

