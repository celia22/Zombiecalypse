let generatedBrain = [];
let generatedEnemies = [];
let generatedEnemiesRight = [];
let enemiesInterval;
let enemiesRightInterval;
let brainsInterval;


class Game {
  constructor(player, ctx) {
    this.player = player;
    this.ctx = ctx;
    this.score = 0;
    this.endGame = false;
  }

  setControlsToKeys() {
    document.addEventListener('keydown', event => {
      switch (event.code) {
        case "ArrowLeft":
          this.player.moveLeft();
          break;
        case "ArrowRight":
          this.player.moveRight();
          break;
        case "ArrowUp":
          this.player.moveUp();
          break;

      }
    });

    document.addEventListener('keyup', event => {
      switch (event.code) {
        case "ArrowUp":
          this.player.fall();
          //this.player.isInGround();
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
        (this.player.y + this.player.size) > item.y && item.status === true) {
        item.status = false;
        this.score++
      }
    });
  }


  moveBrains() {
    generatedBrain.forEach(item => {
      item.y += 7;
    });
  }

  deleteBrains() {
    generatedBrain.forEach((item, index) => {
      if (item.y > canvas.height) {
        generatedBrain.splice(item, index);
      }
    });
  }

  // ENEMIES 

  generateEnemies() {
    console.log("entro en enemies")
    let temp = new Enemies(this.x, 0, this.size, ctx, true)
    generatedEnemies.push(temp);

  }

  generateEnemiesRight() {
    console.log("entro en enemies2")
    let tempRight = new EnemiesRight(this.x, 0, this.size, ctx, true)
    generatedEnemiesRight.push(tempRight);
  }

  printEnemies() {
    generatedEnemies.forEach(item => {
      if (item.status === true) {
        item.draw();
      }
    });
  }

  printEnemiesRight() {
    generatedEnemiesRight.forEach(item => {
      if (item.status === true) {
        item.draw();
      }
    });
  }

  moveEnemies() {
    generatedEnemies.forEach(item => {
      item.x -= 10;
    });
  }

  moveEnemiesRight() {
    generatedEnemiesRight.forEach(item => {
      item.x += 10;
    });
  }


  enemiesCollision() {
    generatedEnemies.forEach(item => {
      if (this.player.x < (item.x + item.size + 10) &&
        (this.player.x + this.player.size / 2) > item.x &&
        this.player.y < (item.y + item.size) &&
        (this.player.y + this.player.size) > item.y &&
        item.status === true) {
        item.status = false;
        this.endGame = true;
        console.log("entro en collision")
      }
    });
  }

  enemiesCollisionRight() {
    generatedEnemiesRight.forEach(item => {
      if (this.player.x < (item.x + item.size + 10) &&
        (this.player.x + this.player.size / 2) > item.x &&
        this.player.y < (item.y + item.size) &&
        (this.player.y + this.player.size) > item.y &&
        item.status === true) {
        item.status = false;
        this.endGame = true;
        console.log("entro en collisionR")
        console.log(generatedEnemiesRight)
      }
    });
  }

  deleteEnemies() {
    generatedEnemies.forEach((item, index) => {
      if (item.y > canvas.height) {
        generatedEnemies.splice(item, index);
      }
    });
  }

  // GAME //

  drawScore() {
    document.getElementById("score").innerHTML = "Score: " + this.score;
  }

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
    this.printEnemiesRight();
    this.moveEnemiesRight();
    this.enemiesCollisionRight();
    this.drawScore();
    this.deleteBrains();
    this.deleteEnemies();
    if (this.endGame === false) {
      window.requestAnimationFrame(this.update.bind(this));
    }
    if (this.endGame === true) {
      gameOver();
      console.log(this.endGame)
      this.reset();
    }
  }

  init() {
    this.setControlsToKeys();
    enemiesInterval = setInterval(this.generateEnemies, 8000)
    enemiesRightInterval = setInterval(this.generateEnemiesRight, 6000)
    brainsInterval = setInterval(this.generateBrains, 3000)
    window.requestAnimationFrame(this.update.bind(this));
  }

  reset() {
    console.log("entro en reset")
    clearInterval(enemiesInterval);
    clearInterval(enemiesRightInterval);
    clearInterval(brainsInterval);
    this.player = this.player;
    this.score = 0;
    this.endGame = false;
    console.log("score", this.score)
  }

};

