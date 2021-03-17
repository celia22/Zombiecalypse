let generatedBrain = [];
let generatedEnemies = [];


class Game {
  constructor(player, ctx) {
    this.player = player;
    this.ctx = ctx;
    this.score = 0;

    //this.gameover;

  }

  setControlsToKeys() {
    document.addEventListener('keydown', event => {
      switch (event.code) {
        case "ArrowLeft":
          this.player.moveLeft();
          this.player.isDirectionLeft();
          console.log(this.player.direction)
          //console.log('left');
          break;
        case "ArrowRight":
          this.player.moveRight();
          this.player.isDirectionRight();
          //console.log('right');
          break;
        case "ArrowUp":
          this.player.moveUp();
          this.player.isDirectionUp();
          //console.log("up");
          break;

      }
      //console.log("setokeys", this.setControlsToKeys)
    });

    document.addEventListener('keyup', event => {
      switch (event.code) {
        case "ArrowUp":
          this.player.fall();
          this.player.isInGround();
          break;

      }
    });

  }

  // BRAINS 

  generateBrains() {
    let temp = new Brains(this.x, 0, this.size, this.ctx, true)
    generatedBrain.push(temp);
  }


  printBrains() {
    generatedBrain.forEach(item => {
      if (item.status === true) {
        item.draw();
      }
    });
  }

  brainCollision() {
    generatedBrain.forEach(item => {
      if (this.player.x < (item.x + item.size) &&
        (this.player.x + this.player.size / 2) > item.x &&
        this.player.y < (item.y + item.size) &&
        (this.player.y + this.player.size) > item.y) {
        item.status = false;
        this.score++  // sube 49 puntos por collision
        console.log("score", this.score)
      }

    });
  }


  moveBrains() {
    generatedBrain.forEach(item => {
      item.y += 5;
    });
  }

  // ENEMIES 

  generateEnemies() {
    let temp = new Enemies(this.x, 0, this.size, ctx, true)
    generatedEnemies.push(temp);
  }


  printEnemies() {
    generatedEnemies.forEach(item => {
      if (item.status === true) {
        item.draw();
      }
    });
  }

  moveEnemies() {
    generatedEnemies.forEach(item => {
      item.x += 8;
    });
  }


  enemiesCollision() {
    generatedEnemies.forEach(item => {
      if (this.player.x < (item.x + item.size) &&
        (this.player.x + this.player.size / 2) > item.x &&
        this.player.y < (item.y + item.size) &&
        (this.player.y + this.player.size) > item.y) {
        item.status = false;
      }
    });
    return true
  }



  // delete(){
  //   if(this.y > canvas.height){

  //   }
  // }

  // updateScore() {
  //   if (this.brainCollision === true) {
  //     this.score++
  //   } else if (this.enemiesCollision === true) {
  //     //setGameOver();
  //   }
  //   console.log("score", this.score)
  // }

  // drawScore() {
  // }


  cleanCanvas() {
    ctx.clearRect(0, 0, 1450, 750);
  }

  update() {
    this.cleanCanvas();
    this.player.draw();
    this.printBrains();
    this.moveBrains();
    this.brainCollision();
    this.printEnemies();
    this.moveEnemies();
    this.enemiesCollision();
    //this.updateScore();
    window.requestAnimationFrame(this.update.bind(this));

  }


  init() {
    this.setControlsToKeys();
    console.log("setcontrolskeys was called")
    setInterval(this.generateBrains, 3000)
    setInterval(this.generateEnemies, 6000)
    window.requestAnimationFrame(this.update.bind(this));
  }


};

