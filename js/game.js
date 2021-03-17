let generatedBrain = [];
let generatedEnemies = [];


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
          setInterval(this.player.isDirectionUp, 2000);
          //console.log("up");
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

  // BRAINS 

  generateBrains() {
    let temp = new Brains()
    generatedBrain.push(temp);
  }


  printBrains() {
    generatedBrain.forEach(item => {
      item.draw();
    });
  }


  moveBrains() {
    generatedBrain.forEach(item => {
      item.y += 5;
    });
  }

  // ENEMIES 

  generateEnemies() {
    let temp = new Enemies()
    generatedEnemies.push(temp);
  }


  printEnemies() {
    generatedEnemies.forEach(item => {
      item.draw();
    });

  }

  moveEnemies() {
    generatedEnemies.forEach(item => {
      item.y += 5;
    });
  }


  brainCollision() {
    generatedBrain.forEach(item => {
      if (this.player.x < (item.x + item.size) &&
        (this.player.x + this.player.size / 2) > item.x &&
        this.player.y < (item.y + item.size) &&
        (this.player.y + this.player.size) > item.y) {
      }
    });

  }

  enemiesCollision() {
    generatedEnemies.forEach(item => {
      if (this.player.x < (item.x + item.size) &&
        (this.player.x + this.player.size / 2) > item.x &&
        this.player.y < (item.y + item.size) &&
        (this.player.y + this.player.size) > item.y) {
      }
    });

  }


  // updateScore() {
  //   if (brainCollision() === true) {
  //     this.score++
  //   } else if (enemiesCollision() === true) {
  //     //setGameOver();
  //   }
  //   console.log(this.score)
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

