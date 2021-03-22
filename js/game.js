let generatedBrain = [];
let generatedEnemies = [];
let generatedEnemiesRight = [];
let enemiesInterval;
let enemiesRightInterval;
let brainsInterval;
// let tempBrains;
// let tempEnemie;
// let tempEnemieRight;


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
    let tempBrains = new Brains(this.x, 0, this.size, this.ctx, true)
    generatedBrain.push(tempBrains);
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
    let tempEnemie = new Enemies(this.x, 0, this.size, ctx, true)
    generatedEnemies.push(tempEnemie);

  }

  generateEnemiesRight() {
    console.log("entro en enemies2")
    let tempEnemieRight = new EnemiesRight(this.x, 0, this.size, ctx, true)
    generatedEnemiesRight.push(tempEnemieRight);
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
      if (this.score > 5) {
        item.x -= 15;
      } else {
        item.x -= 12;
      }

    });
  }

  moveEnemiesRight() {
    generatedEnemiesRight.forEach(item => {
      if (this.score > 5) {
        item.x += 15;
      } else {
        item.x += 12;
      }

    });
  }


  enemiesCollision() {
    generatedEnemies.forEach(item => {
      if (this.player.x < (item.x + item.size) &&
        (this.player.x + this.player.size / 2) > item.x &&
        this.player.y < (item.y + item.size) &&
        (this.player.y + this.player.size) > item.y &&
        item.status === true) {
        item.status = false;
        this.endGame = true;
        console.log("entro en collision", "player", this.player.x, "car", item.x, "itemsize", item.size)
      }
    });
  }

  enemiesCollisionRight() {
    generatedEnemiesRight.forEach(item => {
      if (this.player.x < (item.x + item.size) &&
        (this.player.x + this.player.size / 2) > item.x &&
        this.player.y < (item.y + item.size) &&
        (this.player.y + this.player.size) > item.y &&
        item.status === true) {
        item.status = false;
        this.endGame = true;
        console.log("entro en collisionR", "player", this.player.x, "car", item.x, "itemsize", item.size)
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
    generatedBrain = [];
    generatedEnemies = [];
    generatedEnemiesRight = [];
    console.log("score", this.score)
  }

};

