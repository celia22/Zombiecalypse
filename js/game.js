class Game {
  constructor(player, ctx){    
    this.player = player;
    this.ctx = ctx;
    //this.brains;
    //this.score;
    //this.gameover;
    
  }

  drawPlayer(){    
    const img = new Image();
    img.src = "./images/zombies/Attack (2).png"; 
    console.log(this.player.x)  
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
    window.requestAnimationFrame(this.update.bind(this));
   
  }  

  init() {
    this.setControlsToKeys ();
    window.requestAnimationFrame(this.update.bind(this));
  }
  
};

