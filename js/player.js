class Player {
  constructor() {
    this.x = 250;
    this.y = 500; 
    this.points = 0;   
    const img = new Image();
    img.addEventListener('load', () => {
    this.img = img;
    this.draw();
    });

    img.src = "./images/zombies/female/Attack (2).png";
   
  }
  moveLeft() {
    this.x -= 40;
  }
  moveRight() {
    this.x += 40;
  }
  moveUp(){
    this.y -= 40;
  }
  moveDown(){
    this.y += 40;
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 100, 100);
  }
}

const player1 = new Player();

document.addEventListener('keydown', event => {
  switch (event.code) {   
    case "ArrowLeft":     
      player1.moveLeft();
      //console.log('left');
      break;
    case "ArrowRight":
      player1.moveRight();
      //console.log('right');
      break;
    case "ArrowUp":
      player1.moveUp();
      //console.log("up");
      break;
    case "ArrowDown":
      player1.moveDown();
     // console.log("down")    
  }
  updateCanvas();
});

function updateCanvas() {
  ctx.clearRect(0,0,1300,700);
  player1.draw()
}

updateCanvas()