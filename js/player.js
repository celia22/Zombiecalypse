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
    this.direction = "rigth";
    
  }

  moveLeft() {
    if(this.x > 0){
      this.x -= 40;
    }    
    
  }
  moveRight() {
    if(this.x < 1270){
      this.x += 40;
    } 
    
  }
  moveUp(){
    if(this.y > 0){
      this.y -= 40;
    } 
      
  }

  

};  
 



