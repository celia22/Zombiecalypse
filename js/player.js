class Player {
  constructor(x,y,direction,ctx) {
    this.x = x;
    this.y = y; 
    this.direction = direction;
    this.ctx = ctx;
    
  }

  moveLeft() {
    if(this.x > 20){
      this.x -= 100;
    }    
    
  }
  moveRight() {
    if(this.x < 1250){
      this.x += 100;
    } 
    
  }
  moveUp(){
    if(this.y === 540){
      this.y -= 200;
    }       
  }

  fall(){
    if (this.y === 340){
      this.y += 200;
    }
     
  }

  updateDirection(){
    switch(this.direction){
      case "right":
      this.direction = 1;
      break;

      case "left":
      this.direction = 2;
      break;

      case "up":
      this.direction = 3;
      break;
    }
  }  
  
  draw(){
    this.img = new Image();
    this.img.src = "./images/zombies/Attack (2).png";

    this.playerRight = "./images/zombies/Attack (2).png";
    this.playerLeft = "./images/zombies/Dead (1).png";
    this.playerUp = "./images/zombies/Walk (10).png";

    if (this.direction === 1) {
        this.img.src = this.playerRight;
      } else if (this.direction === 2) {
          this.img.src = this.playerLeft;
      } else if (this.direction === 3){
          this.img.src = this.playerUp;
      }
     console.log("drawbzombie was called")
    this.ctx.drawImage(img, this.x, this.y, this.size, this.size);  /// peta aqui
    //console.log("drawbzombie is executed")
  }


};

