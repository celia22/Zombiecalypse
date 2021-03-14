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
    this.y = 500; 
    this.points = 0; 
    this.direction = "rigth";
    
  }

  moveLeft() {
    this.x -= 40;
    //this.img.src = "./images/zombies/Attack (2).png";
  }
  moveRight() {
    this.x += 40;
    //this.img.src = "./images/zombies/Dead (1).png"; 
  }
  moveUp(){
    this.y -= 40;
   // this.img.src = "./images/zombies/Walk (10).png"; 
  }

  

};  
 


