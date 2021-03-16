let generatedBrain = [];


class Game {
  constructor(player, brains, score, ctx) {
    this.player = player;
    this.brains = brains;
    this.score = score;
    this.ctx = ctx;

    //this.gameover;

  }

  setControlsToKeys() {
    console.log("movePlayer is called")
    document.addEventListener('keydown', event => {
      switch (event.code) {
        case "ArrowLeft":
          this.player.moveLeft();
          // this.player.direction === 2;
          console.log('left');
          break;
        case "ArrowRight":
          this.player.moveRight();
          // this.player.direction === 1;
          console.log('right');
          break;
        case "ArrowUp":
          this.player.moveUp();
          // this.player.direction === 3;
          console.log("up");
          break;

      }
    });

    document.addEventListener('keyup', event => {
      switch (event.code) {
        case "ArrowUp":
          this.player.fall();
          break;

      }
    });

  }

  // BRAINS AND ENEMIES

  generateBrains() {
    let temp = new Brains()
    generatedBrain.push(temp);
    // console.log("generateBrains was called")
  }


  printBrains() {
    generatedBrain.forEach(item => {
      item.draw();
    });
    //console.log("drawbrain was called")  
  }


  moveBrains() {
    generatedBrain.forEach(item => {
      item.y += 5;
    });
  }

  // collision(){
  // }


  // updateScore(){
  // }

  // drawScore(){
  // }


  cleanCanvas() {
    ctx.clearRect(0, 0, 1450, 750);
  }

  update() {
    this.cleanCanvas();
    this.player.draw();
    this.printBrains();
    this.moveBrains();
    window.requestAnimationFrame(this.update.bind(this));

  }


  init() {
    this.setControlsToKeys();
    console.log("setcontrolskeys was called")
    setInterval(this.generateBrains, 3000)
    window.requestAnimationFrame(this.update.bind(this));
  }


};

