// const img = new Image();
// const left = new Image();
// const right = new Image();
// const jump = new Image();

    // const img = new Image();
    // img.src = "./images/zombies/Attack (2).png"; 
    
    // left.src = "./images/zombies/Attack (2).png"
    // right.src = "./images/zombies/Dead (1).png"
    // jump.src = "./images/zombies/Walk (10).png"; 


class Player {
  constructor() {
    this.x = 250;
    this.y = 540; 
    this.direction = "rigth";
    
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

  

};  
 


console.log(canvas.height)
